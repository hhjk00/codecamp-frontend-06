import * as S from "./UsedItemDetail.styles";
import Dompurify from "dompurify";
import { Tooltip } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function UsedItemDetailUI(props) {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`${"/images/like.png"}/abstract0${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <S.DetailPage>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.Profile src="/images/profile.png" />
          <S.WriterDateWrapper>
            <S.Writer>{props.userInfo.name}</S.Writer>
            <S.WriteDate>
              Date: {getDate(props.data?.fetchUseditem.createdAt)}
            </S.WriteDate>
          </S.WriterDateWrapper>

          <S.InfoWrapper>
            <S.Url src="/images/url.png" />
            {/* <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            > */}
            <S.Locate src="/images/location.png" />
            {/* </Tooltip> */}
          </S.InfoWrapper>
        </S.HeaderWrapper>

        <S.ContentsWrapper>
          <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
          <S.Title>{props.data?.fetchUseditem.name}</S.Title>
          <S.Price>{props.data?.fetchUseditem.price}</S.Price>

          <S.ImageWrapper>
            <div>
              <h2>Custom Paging</h2>
              <Slider {...settings}>
                <div>
                  <img
                    src={
                      "https://storage.googleapis.com" + "/images/location.png"
                    }
                  />
                </div>
                <div>
                  <img src={"/images/like.png" + "/abstract02.jpg"} />
                </div>
                <div>
                  <img src={"/images/like.png" + "/abstract03.jpg"} />
                </div>
                <div>
                  <img src={"/images/gosim1.png" + "/abstract04.jpg"} />
                </div>
              </Slider>
            </div>{" "}
          </S.ImageWrapper>

          {typeof window !== "undefined" && (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            ></S.Contents>
          )}
          <S.Tag>{props.data?.fetchUseditem.tags}</S.Tag>
        </S.ContentsWrapper>

        <S.MapWrapper></S.MapWrapper>

        <S.ButtonWrapper>
          <S.Button style={{ backgroundColor: "lightgray" }}>목록으로</S.Button>
          <S.Button style={{ backgroundColor: "#FFD600" }}>구매하기</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.DetailPage>
  );
}
