import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";
import { Modal } from "antd";

export default function BoardCommentList() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onClickWriter = (event: MouseEvent<HTMLDivElement>) => {
    Modal.info({
      content: event.currentTarget.id + "님이 작성한 댓글입니다.",
      onOk() {},
    });
  };

  return <BoardCommentListUI data={data} onClickWriter={onClickWriter} />;
}
