import { ChangeEvent, MouseEvent, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardCommentList.styles";
import { Modal } from "antd";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { IBoardCommentItemProps } from "./BoardCommentList.types";

export default function BoardCommentItem(props: IBoardCommentItemProps) {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [myPassword, setMyPassword] = useState("");

  // 댓글 수정하기
  const onClickUpdate = () => {
    setIsEdit(true);
  };

  // 댓글 삭제하기
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDelete = async () => {
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
  };

  // 비밀번호 모달창
  const onClickOpenDeleteModal = (event: MouseEvent<HTMLImageElement>) => {
    setIsOpenDeleteModal(true);
    if (event.target instanceof Element) setDeleteId(event.target.id);
  };

  // 비밀번호 입력값 받아오기
  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  // 작성자 정보 모달창
  const onClickWriter = (event: MouseEvent<HTMLDivElement>) => {
    Modal.info({
      content: event.currentTarget.id + "님이 작성한 댓글입니다.",
      onOk() {},
    });
  };

  return (
    <S.CommentListPage>
      <S.Wrapper>
        {isOpenDeleteModal && (
          <Modal visible={true} onOk={onClickDelete}>
            <div>비밀번호 입력: </div>
            <S.PasswordInput
              type="password"
              onChange={onChangeDeletePassword}
            />
          </Modal>
        )}

        {isEdit === false && (
          <S.CommentWrapper key={props.el._id}>
            <S.CommentTop>
              <S.CommentProfile src="/images/profile.png" />
              <S.CommentInputWrapper
                id={props.el.writer}
                onClick={onClickWriter}
              >
                <S.WriterRating>
                  <S.CommentWriter>{props.el.writer}</S.CommentWriter>
                  <S.Rating value={props.el.rating} disabled />
                </S.WriterRating>
                <S.CommentContents>{props.el.contents}</S.CommentContents>
                <S.CommentDate>{getDate(props.el.createdAt)}</S.CommentDate>
              </S.CommentInputWrapper>
              <S.UpdateButton onClick={onClickUpdate}>수정하기</S.UpdateButton>
              <S.DeleteButton
                id={props.el._id}
                onClick={onClickOpenDeleteModal}
              >
                삭제하기
              </S.DeleteButton>
            </S.CommentTop>
            <S.CommentBottom></S.CommentBottom>
          </S.CommentWrapper>
        )}

        {isEdit && (
          <BoardCommentWrite
            isEdit={true}
            setIsEdit={setIsEdit}
            el={props.el}
          />
        )}
      </S.Wrapper>
    </S.CommentListPage>
  );
}
