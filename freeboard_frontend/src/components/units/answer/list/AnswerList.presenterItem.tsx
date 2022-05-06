import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import UsedItemAnswerWrite from "../write/AnswerWrite.container";
import {
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  FETCH_USER_LOGGED_IN,
} from "./AnswerList.queries";
import * as S from "./AnswerList.styles";

export default function UsedItemAnswerListItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const { data: loggedIn } = useQuery(FETCH_USER_LOGGED_IN);

  // 댓글 수정하기
  const onClickUpdate = () => {
    setIsEdit(true);
  };

  // 댓글 삭제하기
  const [deleteUseditemQuestion] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionAnswerId: String(props.ele._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: String(props.el._id) },
          },
        ],
      });
      Modal.success({ content: "답변이 삭제되었습니다." });
      setIsEdit(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <S.CommentListPage>
      <S.Wrapper>
        {isEdit === false && (
          <S.CommentWrapper key={props.ele._id}>
            <S.CommentTop>
              <S.CommentProfile src="/images/profile.png" />
              <S.CommentInputWrapper>
                <S.CommentWriter>{props.ele.user.name}</S.CommentWriter>
                <S.CommentContents>{props.ele.contents}</S.CommentContents>
                <S.CommentDate>{getDate(props.ele.createdAt)}</S.CommentDate>
              </S.CommentInputWrapper>
              <S.UpdateButton onClick={onClickUpdate}>수정하기</S.UpdateButton>
              <S.DeleteButton id={props.ele._id} onClick={onClickDelete}>
                삭제하기
              </S.DeleteButton>
            </S.CommentTop>
          </S.CommentWrapper>
        )}

        {isEdit && (
          <UsedItemAnswerWrite
            isEdit={true}
            setIsEdit={setIsEdit}
            ele={props.ele}
          />
        )}
      </S.Wrapper>
    </S.CommentListPage>
  );
}
