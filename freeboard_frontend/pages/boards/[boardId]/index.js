import { Wrapper, Info, InfoRectangle,
  InfoPolygon, HeaderWrapper, Header, Profile,  WriterDateWrapper, Writer,
  InfoWrapper, Url, Locate, ContentsWrapper, Title,
  Contents, LikeWrapper,  Like, LikePic, LikeNum, DisLike,
  DislikePic, DislikeNum  } from "../../../styles/boardId";
import { useQuery, gql } from "@apollo/client";
import { Router, useRouter } from "next/router";

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
    <Wrapper>
      <Info>
        <InfoRectangle>
          서울특별시 영등포구 양산로 200 (영등포동5가, 영등포시장역) 영등포
          타임스퀘어 2층
        </InfoRectangle>
        <InfoPolygon></InfoPolygon>
      </Info>

      <HeaderWrapper>
          <Profile><img src="/pic/profile.png"/></Profile>
          <WriterDateWrapper>
            <Writer>{data?.fetchBoard.writer}</Writer>
            <Date></Date>
          </WriterDateWrapper>
          <InfoWrapper>
            <Url><img src="/pic/url.png"/></Url>
            <Locate><img src="/pic/locate.png"/></Locate>
          </InfoWrapper>
      </HeaderWrapper>

      <ContentsWrapper>
        <Title>{data?.fetchBoard.title}</Title>
        <Contents>{data?.fetchBoard.contents}</Contents>
      </ContentsWrapper>

      <LikeWrapper>
        <Like>
          <LikePic></LikePic>
          <LikeNum>1920</LikeNum>
        </Like>
        <DisLike>
          <DislikePic></DislikePic>
          <DislikeNum></DislikeNum>
        </DisLike>
      </LikeWrapper>

    </Wrapper>
  );
}
