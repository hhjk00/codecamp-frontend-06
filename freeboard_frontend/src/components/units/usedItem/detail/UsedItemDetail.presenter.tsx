import * as S from "./UsedItemDetail.styles";
import Dompurify from "dompurify";
import { Tooltip } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import styled from "@emotion/styled";
import Slider from "react-slick";

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: inline-block;
  }
  .slick-list {
    width: 350px;
    overflow-x: hidden;
  }

  .slick-dots.slick-thumb {
    margin: auto;

    li {
      position: relative;
      display: inline-block;
      &.slick-active {
        border: 1px solid #bdbdbd;
      }
    }
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  :hover {
    opacity: 70%;
  }
`;

export default function UsedItemDetailUI(props) {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <Img
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
            <StyledSlider {...settings}>
              {props.data?.fetchUseditem.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <img key={el} src={`https://storage.googleapis.com/${el}`} />
                ))}
            </StyledSlider>
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
          <S.Button
            style={{ backgroundColor: "lightgray" }}
            onClick={props.onClickMoveToPage("/markets")}
          >
            목록으로
          </S.Button>
          <S.Button style={{ backgroundColor: "#FFD600" }}>구매하기</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.DetailPage>
  );
}
