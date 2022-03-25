import { getDate } from "../../../../commons/libraries/utils";
import {
  DetailPage,
  Wrapper,
  Info,
  InfoRectangle,
  InfoPolygon,
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
} from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <DetailPage>
      <Wrapper>
        <Info>
          <InfoRectangle>
            <div>서울특별시 영등포구 양산로 200 </div>
            <div>(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층</div>
          </InfoRectangle>
          <InfoPolygon></InfoPolygon>
        </Info>

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
            <Locate src="/images/location.png" />
          </InfoWrapper>
        </HeaderWrapper>

        <ContentsWrapper>
          <Title>{props.data?.fetchBoard.title}</Title>
          <Contents>{props.data?.fetchBoard.contents}</Contents>
        </ContentsWrapper>

        <LikeWrapper>
          <LikeDislike>
            <Like>
              <LikePic src="/images/like.png" />
              <LikeNum>1920</LikeNum>
            </Like>
            <DisLike>
              <DislikePic src="/images/dislike.png" />
              <DislikeNum>1920</DislikeNum>
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
