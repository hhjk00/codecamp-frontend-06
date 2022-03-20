import { DetailPage, Wrapper, Info, InfoRectangle,
  InfoPolygon, HeaderWrapper, Profile,  WriterDateWrapper, Writer, WriteDate,
  InfoWrapper, Url, Locate, ContentsWrapper, Title,
  Contents, LikeWrapper, LikeDislike, Like, LikePic, LikeNum, DisLike,
  DislikePic, DislikeNum, MoveWrapper, ListEdit, List, Edit, Delete  } from "../../../styles/boardId";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BoardsDetailPage() {
  const router = useRouter();
  console.log(router);

  const { data } = useQuery(FETCH_BOARD, {
    //요청이 날아감(비어있는 상태 undefined)
    variables: { boardId: router.query.boardId }, // 83013
  });

  console.log(data);

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
          <Profile><img src="/pic/profile.png"/></Profile>
          <WriterDateWrapper>
            <Writer>{data?.fetchBoard.writer}</Writer>
            <WriteDate>Date : </WriteDate>
          </WriterDateWrapper>
          <InfoWrapper>
            <Url><img src="/pic/url.png"/></Url>
            <Locate><img src="/pic/location.png"/></Locate>
          </InfoWrapper>
      </HeaderWrapper>

      <ContentsWrapper>
        <Title>{data?.fetchBoard.title}</Title>
        <Contents>{data?.fetchBoard.contents}</Contents>
      </ContentsWrapper>

      <LikeWrapper>
        <LikeDislike>
        <Like>
          <LikePic><img src="/pic/like.png"/></LikePic>
          <LikeNum>1920</LikeNum>
        </Like>
        <DisLike>
          <DislikePic><img src="/pic/dislike.png"/></DislikePic>
          <DislikeNum>1920</DislikeNum>
        </DisLike>
        </LikeDislike>
      </LikeWrapper>

    </Wrapper>
    
    <MoveWrapper>
    <ListEdit>
    <List>목록으로</List>
    <Edit>수정하기</Edit>
    <Delete>삭제하기</Delete>
    </ListEdit>
  </MoveWrapper>

    
  </DetailPage>
  );
}
