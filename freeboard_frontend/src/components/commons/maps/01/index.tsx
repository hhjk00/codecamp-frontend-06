import styled from "@emotion/styled";
import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export const Map = styled.div`
  width: 384px;
  height: 252px;
  border: 1px solid #bdbdbd;
`;

export default function KakaoMap() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=58129ac07f6fdda65814d3d744bfb178&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });

        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 클릭한 위치를 표시할 마커입니다
        const infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

        // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);

        // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            searchDetailAddrFromCoords(
              mouseEvent.latLng,
              function (result, status) {
                if (status === window.kakao.maps.services.Status.OK) {
                  let detailAddr = !!result[0].road_address
                    ? "<div>도로명주소 : " +
                      result[0].road_address.address_name +
                      "</div>"
                    : "";
                  detailAddr +=
                    "<div>지번 주소 : " +
                    result[0].address.address_name +
                    "</div>";

                  const content =
                    '<div class="bAddr" style="padding:5px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">' +
                    '<span class="title" style="font-weight:bold; display:block" >주소정보</span>' +
                    detailAddr +
                    "</div>";

                  // 마커를 클릭한 위치에 표시합니다
                  marker.setPosition(mouseEvent.latLng);
                  marker.setMap(map);

                  // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                  infowindow.setContent(content);
                  infowindow.open(map, marker);
                }
              }
            );
          }
        );

        // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
        window.kakao.maps.event.addListener(map, "idle", function () {
          searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        });

        function searchAddrFromCoords(coords, callback) {
          // 좌표로 행정동 주소 정보를 요청합니다
          geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
        }

        function searchDetailAddrFromCoords(coords, callback) {
          // 좌표로 법정동 상세 주소 정보를 요청합니다
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
        function displayCenterInfo(result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            const infoDiv = document.getElementById("centerAddr");

            for (let i = 0; i < result.length; i++) {
              // 행정동의 region_type 값은 'H' 이므로
              if (result[i].region_type === "H") {
                infoDiv.innerHTML = result[i].address_name;
                break;
              }
            }
          }
        }
      });
    };
  }, []);

  return (
    <div>
      <Map id="map"></Map>
      <div id="centerAddr"></div>
    </div>
  );
}
