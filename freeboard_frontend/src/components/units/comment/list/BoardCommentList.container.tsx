import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentList() {
  const router = useRouter();

  // 댓글 불러오기
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  // 댓글 무한 스크롤
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoardComments.length / 10) + 1,
        boardId: String(router.query.boardId),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return <BoardCommentListUI data={data} onLoadMore={onLoadMore} />;
}
