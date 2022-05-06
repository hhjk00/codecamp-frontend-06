import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import UsedItemQuestionWriteUI from "./QuestionWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "./QuestionWrite.queries";

export default function UsedItemQuestionWrite(props) {
  const router = useRouter();

  const [contents, setContents] = useState("");

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

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
        await createUseditemQuestion({
          variables: {
            createUseditemQuestionInput: {
              contents: contents,
            },
            useditemId: String(router.query.useditemId),
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS,
              variables: { useditemId: String(router.query.useditemId) },
            },
          ],
        });
        setContents("");
        Modal.success({
          content: "문의가 등록되었습니다.",
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
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const onClickUpdate = async () => {
    if (!contents) {
      Modal.warning({
        content: "수정된 내용이 없습니다.",
      });
      return;
    }

    // 수정된 값이 없으면 그대로 입력하게 해줌
    const updateUseditemQuestionInput = {};
    if (contents) updateUseditemQuestionInput.contents = contents;
    /*
     const updateBoardCommentInput = {
       contents: "",
       rating :
     }

    */
    try {
      // 아이디가 없으면 실행하지 않음
      if (!props.el?._id) return;

      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput,
          useditemQuestionId: String(props.el?._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      props.setIsEdit?.(false);
      Modal.success({
        content: "문의가 수정되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return (
    <UsedItemQuestionWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      el={props.el}
      contents={contents}
      onChangeContents={onChangeContents}
      onClickCancel={onClickCancel}
    />
  );
}
