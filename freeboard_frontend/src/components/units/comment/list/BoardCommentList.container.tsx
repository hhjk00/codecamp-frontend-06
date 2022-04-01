import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Modal } from "antd";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";

export default function BoardCommentList() {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [myPassword, setMyPassword] = useState("");

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

  // 댓글 삭제하기
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  async function onClickDelete() {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: deleteId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
      setDeleteId("");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  // 비밀번호 모달창
  function onClickOpenDeleteModal(event: MouseEvent<HTMLImageElement>) {
    setIsOpenDeleteModal(true);
    if (event.target instanceof Element) setDeleteId(event.target.id);
  }

  // 비밀번호 입력값 받아오기
  function onChangeDeletePassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  // 작성자 정보 모달창
  const onClickWriter = (event: MouseEvent<HTMLDivElement>) => {
    Modal.info({
      content: event.currentTarget.id + "님이 작성한 댓글입니다.",
      onOk() {},
    });
  };

  return (
    <BoardCommentListUI
      data={data}
      isOpenDeleteModal={isOpenDeleteModal}
      onClickWriter={onClickWriter}
      onClickDelete={onClickDelete}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
      onLoadMore={onLoadMore}
    />
  );
}
