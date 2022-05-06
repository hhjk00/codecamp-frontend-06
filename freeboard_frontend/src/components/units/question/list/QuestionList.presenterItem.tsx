import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import UsedItemAnswerList from "../../answer/list/AnswerList.container";
import UsedItemAnswerWrite from "../../answer/write/AnswerWrite.container";
import UsedItemQuestionWrite from "../write/QuestionWrite.container";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USER_LOGGED_IN,
} from "./QuestionList.queries";
import * as S from "./QuestionList.styles";

export default function UsedItemQuestionListItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [answer, setAnswer] = useState(false);
  const { data: loggedIn } = useQuery(FETCH_USER_LOGGED_IN);

  // 댓글 수정하기
  const onClickUpdate = () => {
    setIsEdit(true);
  };

  // 댓글 삭제하기
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: String(props.el._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      Modal.success({ content: "문의가 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 대댓글
  const onClickAnswer = () => {
    setAnswer(true);
  };

  return (
    <S.CommentListPage>
      <S.Wrapper>
        {isEdit === false && (
          <>
            <S.CommentWrapper key={props.el._id}>
              <S.CommentTop>
                <S.CommentProfile src="/images/profile.png" />
                <S.CommentInputWrapper>
                  <S.CommentWriter>{props.el.user.name}</S.CommentWriter>
                  <S.CommentContents>{props.el.contents}</S.CommentContents>
                  <S.CommentDate>{getDate(props.el.createdAt)}</S.CommentDate>
                </S.CommentInputWrapper>
                <S.UpdateButton onClick={onClickAnswer}>
                  답변하기
                </S.UpdateButton>
                <S.UpdateButton onClick={onClickUpdate}>
                  수정하기
                </S.UpdateButton>
                <S.DeleteButton id={props.el._id} onClick={onClickDelete}>
                  삭제하기
                </S.DeleteButton>
              </S.CommentTop>
              <UsedItemAnswerList el={props.el} />
            </S.CommentWrapper>
          </>
        )}

        {isEdit && (
          <UsedItemQuestionWrite
            isEdit={true}
            setIsEdit={setIsEdit}
            el={props.el}
          />
        )}

        {answer && (
          <UsedItemAnswerWrite
            answer={true}
            setAnswer={setAnswer}
            el={props.el}
          />
        )}
      </S.Wrapper>
    </S.CommentListPage>
  );
}
