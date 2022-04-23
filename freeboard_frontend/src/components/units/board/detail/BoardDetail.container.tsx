import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardsDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { Modal } from "antd";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  // 좋아요
  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  // 싫어요
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const onClickDislike = () => {
    dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  // 수정하기
  const onClickMoveEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  // 목록으로
  const onClickMoveList = () => {
    router.push("/boards");
  };

  // 삭제하기
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });
      router.push("/boards");
      Modal.success({
        content: "게시물이 삭제되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  return (
    <BoardsDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveEdit={onClickMoveEdit}
      onClickMoveList={onClickMoveList}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
