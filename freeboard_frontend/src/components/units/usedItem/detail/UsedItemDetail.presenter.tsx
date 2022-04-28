import * as S from "./UsedItemDetail.styles";
import Dompurify from "dompurify";
import { Tooltip } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import KakaoMap02 from "../../../commons/maps/02";
import { useRouter } from "next/router";
import Head from "next/head";

export default function UsedItemDetailUI(props) {
  // console.log(props.data?.fetchUseditem.seller._id);
  // console.log(props.loggedIn._id);
  const router = useRouter();
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <S.Img
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[i]}`}
          />
        </a>
      );
    },
    arrows: false,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <S.DetailPage>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.Profile src="/images/profile.png" />
          <S.WriterDateWrapper>
            <S.Writer>{props.data?.fetchUseditem.seller.name}</S.Writer>
            <S.WriteDate>
              Date: {getDate(props.data?.fetchUseditem.createdAt)}
            </S.WriteDate>
          </S.WriterDateWrapper>

          <S.InfoWrapper>
            <S.Url src="/images/url.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
            >
              <S.Locate src="/images/location.png" />
            </Tooltip>
          </S.InfoWrapper>
        </S.HeaderWrapper>
        <S.ContentsWrapper>
          <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
          <S.Title>{props.data?.fetchUseditem.name}</S.Title>
          <S.Price>{props.data?.fetchUseditem.price}</S.Price>
          <S.ImageWrapper>
            <S.StyledSlider {...settings}>
              {props.data?.fetchUseditem.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <S.Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.StyledSlider>
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
        <S.NonPick onClick={props.onClickPick} />
        {props.data?.fetchUseditem.pickedCount}
        {props.data?.fetchUseditem.useditemAddress?.lat &&
        props.data?.fetchUseditem.useditemAddress?.lng ? (
          <S.MapWrapper>
            <KakaoMap02 data={props.data} />
          </S.MapWrapper>
        ) : (
          <div></div>
        )}
        <S.ButtonWrapper>
          <S.Button onClick={props.onClickMoveToPage("/markets")}>
            목록으로
          </S.Button>
          {props.data?.fetchUseditem.seller._id === props.loggedIn?._id ? (
            <S.Button
              onClick={props.onClickMoveToPage(
                `/markets/${router.query.useditemId}/edit`
              )}
            >
              수정하기
            </S.Button>
          ) : (
            <S.Button onClick={props.onClickBuying}>구매하기</S.Button>
          )}

          <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.DetailPage>
  );
}
