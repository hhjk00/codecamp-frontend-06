import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { number: 83011 },
      // IQueryFetchBoardArgs: variables 체킹
    }
  );

  console.log(data);

  return (
    <div>
      <div>{data?.fetchBoard?.number}번 게시글에 오신 것을 환영합니다</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
      {/* 데이터가 있으면 뒤에꺼(데이터) 보여줘 없으면 앞에꺼(작성자..) 보여줘 */}
      {/* //  data && data.fetchBoard.number = data?.fetchBoard.number
              Optional-Chaining이라고 한다. 최신버전에서만 가능 */}
    </div>
  );
}
