import { getDate } from "../../../../commons/libraries/utils";
import { Fragment } from "react";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import { Rate } from "antd";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <S.CommentListPage>
      <S.Wrapper>
        {props.data?.fetchBoardComments.map((el: any) => (
          <Fragment key={el._id}>
            <S.CommentWrapper id={el.writer} onClick={props.onClickWriter}>
              <S.CommentTop>
                <S.CommentProfile src="/images/profile.png" />
                <S.CommentInputWrapper>
                  <S.WriterRating>
                    <S.CommentWriter>{el.writer}</S.CommentWriter>
                    <Rate value={el.rating}></Rate>
                  </S.WriterRating>
                  <S.CommentContents>{el.contents}</S.CommentContents>
                  <S.CommentDate>{getDate(el.createdAt)}</S.CommentDate>
                </S.CommentInputWrapper>
                <S.UpdateButton>수정하기</S.UpdateButton>
                <S.DeleteButton>삭제하기</S.DeleteButton>
              </S.CommentTop>
              <S.CommentBottom></S.CommentBottom>
            </S.CommentWrapper>
          </Fragment>
        ))}
      </S.Wrapper>
    </S.CommentListPage>
  );
}
