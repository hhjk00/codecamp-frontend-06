import { getDate } from "../../../../commons/libraries/utils";
import { Fragment } from "react";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import { Modal } from "antd";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <S.CommentListPage>
      {props.isOpenDeleteModal && (
        <Modal visible={true} onOk={props.onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </Modal>
      )}
      <S.Wrapper>
        {props.data?.fetchBoardComments.map((el: any) => (
          <S.CommentWrapper key={el._id}>
            <S.CommentTop>
              <S.CommentProfile src="/images/profile.png" />
              <S.CommentInputWrapper
                id={el.writer}
                onClick={props.onClickWriter}
              >
                <S.WriterRating>
                  <S.CommentWriter>{el.writer}</S.CommentWriter>
                  <S.Rating value={el.rating} disabled />
                </S.WriterRating>
                <S.CommentContents>{el.contents}</S.CommentContents>
                <S.CommentDate>{getDate(el.createdAt)}</S.CommentDate>
              </S.CommentInputWrapper>
              <S.UpdateButton>수정하기</S.UpdateButton>
              <S.DeleteButton
                id={el._id}
                onClick={props.onClickOpenDeleteModal}
              >
                삭제하기
              </S.DeleteButton>
            </S.CommentTop>
            <S.CommentBottom></S.CommentBottom>
          </S.CommentWrapper>
        ))}
      </S.Wrapper>
    </S.CommentListPage>
  );
}
