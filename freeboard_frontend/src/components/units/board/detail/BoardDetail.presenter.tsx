import { getDate } from "../../../../commons/libraries/utils";
import {
  DetailPage,
  Wrapper,
  HeaderWrapper,
  Profile,
  WriterDateWrapper,
  Writer,
  WriteDate,
  InfoWrapper,
  Url,
  Locate,
  ContentsWrapper,
  Title,
  Contents,
  LikeWrapper,
  LikeDislike,
  Like,
  LikePic,
  LikeNum,
  DisLike,
  DislikePic,
  DislikeNum,
  MoveWrapper,
  Move,
  MoveButton,
  Youtube,
} from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { Tooltip } from "antd";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <DetailPage>
      <Wrapper>
        <HeaderWrapper>
          <Profile src="/images/profile.png" />
          <WriterDateWrapper>
            <Writer>{props.data?.fetchBoard.writer}</Writer>
            <WriteDate>
              Date : {getDate(props.data?.fetchBoard.createdAt)}
            </WriteDate>
          </WriterDateWrapper>

          <InfoWrapper>
            <Url src="/images/url.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <Locate src="/images/location.png" />
            </Tooltip>
          </InfoWrapper>
        </HeaderWrapper>

        <ContentsWrapper>
          <Title>{props.data?.fetchBoard.title}</Title>
          <Contents>{props.data?.fetchBoard.contents}</Contents>
          {props.data?.fetchBoard.youtubeUrl && (
            <Youtube
              url={props.data?.fetchBoard.youtubeUrl}
              width={600}
              height={450}
            />
          )}
        </ContentsWrapper>

        <LikeWrapper>
          <LikeDislike>
            <Like>
              <LikePic src="/images/like.png" onClick={props.onClickLike} />
              <LikeNum>{props.data?.fetchBoard.likeCount}</LikeNum>
            </Like>
            <DisLike>
              <DislikePic
                src="/images/dislike.png"
                onClick={props.onClickDislike}
              />
              <DislikeNum>{props.data?.fetchBoard.dislikeCount}</DislikeNum>
            </DisLike>
          </LikeDislike>
        </LikeWrapper>
      </Wrapper>

      <MoveWrapper>
        <Move>
          <MoveButton onClick={props.onClickMoveList}>목록으로</MoveButton>
          <MoveButton onClick={props.onClickMoveEdit}>수정하기</MoveButton>
          <MoveButton onClick={props.onClickDelete}>삭제하기</MoveButton>
        </Move>
      </MoveWrapper>
    </DetailPage>
  );
}
