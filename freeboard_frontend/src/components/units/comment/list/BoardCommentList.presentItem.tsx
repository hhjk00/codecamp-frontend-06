import styled from "@emotion/styled";
import { useState } from "react";
import * as S from "./BoardCommentList.styles";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardCommentListPresentItem(props: any) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickUpdate = (event) => {
    setIsEdit(true);
  };

  return (
    <>
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
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
          >
            {props.data?.fetchBoardComments.map((el: any) => (
              <S.CommentWrapper key={props.el._id}>
                <S.CommentTop>
                  <S.CommentProfile src="/images/profile.png" />
                  <S.CommentInputWrapper
                    id={props.el.writer}
                    onClick={props.onClickWriter}
                  >
                    <S.WriterRating>
                      <S.CommentWriter>{props.el.writer}</S.CommentWriter>
                      <S.Rating value={props.el.rating} disabled />
                    </S.WriterRating>
                    <S.CommentContents>{props.el.contents}</S.CommentContents>
                    <S.CommentDate>{getDate(props.el.createdAt)}</S.CommentDate>
                  </S.CommentInputWrapper>
                  <S.UpdateButton onClick={onClickUpdate}>
                    수정하기
                  </S.UpdateButton>
                  <S.DeleteButton
                    id={props.el._id}
                    onClick={props.onClickOpenDeleteModal}
                  >
                    삭제하기
                  </S.DeleteButton>
                </S.CommentTop>
                <S.CommentBottom></S.CommentBottom>
              </S.CommentWrapper>
            ))}
          </InfiniteScroll>
        </S.Wrapper>
      </S.CommentListPage>
    </>
  );
}
