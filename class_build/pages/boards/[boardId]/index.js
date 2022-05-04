import Head from "next/head";
import { useRouter } from "next/router";
import { gql, graphql } from "graphql-request";

export default function BoardsDetailPage(props) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta property="og:title" content={props.myboardData?.title} />
        <meta property="og:description" content={props.myboardData?.contents} />
        <meta property="og:image" content={props.myboardData?.images[0]} />
      </Head>
      <div>
        안녕하세요! 게시글 상세페이지입니다, 게시글 ID는 {router.query.boardId}
        입니다.
      </div>
      ;
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

// 이 페이지는 서버사이드 렌더링 할래
export const getServerSideProps = async (context) => {
  // 데이터를 요청할 것
  // const {data} = useQuery(FETCH_BOARD); // 이건 안됨
  const result = await request(
    "https://backend06.codebootcamp.co.kr/grqphql",
    FETCH_BOARD,
    {
      boardId: context.query.boardId, // request 라이브러리 쓸 때는 variables 안써도 되게끔 되어있는 것 같다.
    }
  );

  // const { data } = useQuery(FETCH_BOARD);

  return {
    props: {
      //props는 무조건 써줘야 한다.
      myboardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
