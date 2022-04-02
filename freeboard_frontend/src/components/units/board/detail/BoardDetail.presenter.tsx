import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { Tooltip } from "antd";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.DetailPage>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.Profile src="/images/profile.png" />
          <S.WriterDateWrapper>
            <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
            <S.WriteDate>
              Date : {getDate(props.data?.fetchBoard.createdAt)}
            </S.WriteDate>
          </S.WriterDateWrapper>

          <S.InfoWrapper>
            <S.Url src="/images/url.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <S.Locate src="/images/location.png" />
            </Tooltip>
          </S.InfoWrapper>
        </S.HeaderWrapper>

        <S.ContentsWrapper>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
          {props.data?.fetchBoard.youtubeUrl && (
            <S.Youtube
              url={props.data?.fetchBoard.youtubeUrl}
              width={600}
              height={450}
            />
          )}
        </S.ContentsWrapper>

        <S.LikeWrapper>
          <S.LikeDislike>
            <S.Like>
              <S.LikePic src="/images/like.png" onClick={props.onClickLike} />
              <S.LikeNum>{props.data?.fetchBoard.likeCount}</S.LikeNum>
            </S.Like>
            <S.DisLike>
              <S.DislikePic
                src="/images/dislike.png"
                onClick={props.onClickDislike}
              />
              <S.DislikeNum>{props.data?.fetchBoard.dislikeCount}</S.DislikeNum>
            </S.DisLike>
          </S.LikeDislike>
        </S.LikeWrapper>
      </S.Wrapper>

      <S.MoveWrapper>
        <S.Move>
          <S.MoveButton onClick={props.onClickMoveList}>목록으로</S.MoveButton>
          <S.MoveButton onClick={props.onClickMoveEdit}>수정하기</S.MoveButton>
          <S.MoveButton onClick={props.onClickDelete}>삭제하기</S.MoveButton>
        </S.Move>
      </S.MoveWrapper>
    </S.DetailPage>
  );
}
