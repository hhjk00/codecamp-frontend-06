import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import UsedItemAnswerWriteUI from "./AnswerWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./AnswerWrite.queries";

export default function UsedItemAnswerWrite(props) {
  const [contents, setContents] = useState("");

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );

  // 수정취소
  const onClickCancel = () => {
    props.setIsEdit(false);
  };

  // 등록하기
  const onClickSubmit = async () => {
    if (contents === "") {
      Modal.warning({
        content: "내용을 입력해주세요.",
      });
      return;
    }

    if (contents !== "") {
      try {
        await createUseditemQuestionAnswer({
          variables: {
            createUseditemQuestionAnswerInput: {
              contents: contents,
            },
            useditemQuestionId: String(props.el?._id),
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTION_ANSWERS,
              variables: { useditemQuestionId: String(props.el?._id) },
            },
          ],
        });
        setContents("");
        props.setAnswer?.(false);
        Modal.success({
          content: "답변이 등록되었습니다.",
        });
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            content: error.message,
          });
      }
    }
  };

  // 댓글 수정하기
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  const onClickUpdate = async () => {
    if (!contents) {
      Modal.warning({
        content: "수정된 내용이 없습니다.",
      });
      return;
    }

    // 수정된 값이 없으면 그대로 입력하게 해줌
    const updateUseditemQuestionAnswerInput = {};
    if (contents) updateUseditemQuestionAnswerInput.contents = contents;
    /*
     const updateBoardCommentInput = {
       contents: "",
       rating :
     }

    */
    try {
      // 아이디가 없으면 실행하지 않음
      if (!props.ele?._id) {
        props.setIsEdit?.(false);
        return;
      }

      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput,
          useditemQuestionAnswerId: String(props.ele?._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: String(props.el?._id) },
          },
        ],
      });
      props.setIsEdit?.(false);
      Modal.success({
        content: "답변이 수정되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return (
    <UsedItemAnswerWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      ele={props.ele}
      contents={contents}
      onChangeContents={onChangeContents}
      onClickCancel={onClickCancel}
    />
  );
}
