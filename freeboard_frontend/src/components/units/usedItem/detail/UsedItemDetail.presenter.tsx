import * as S from "./UsedItemDetail.styles";
import Dompurify from "dompurify";
import { Tooltip } from "antd";
import { getDate } from "../../../../commons/libraries/utils";

export default function UsedItemDetailUI(props) {
  return (
    <S.DetailPage>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.Profile src="/images/profile.png" />
          <S.WriterDateWrapper>
            <S.Writer>{props.data?.fetchUseditem.name}</S.Writer>
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

          <S.ImageWrapper></S.ImageWrapper>

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
