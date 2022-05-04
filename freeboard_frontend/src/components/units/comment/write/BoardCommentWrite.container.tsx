import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  // 작성자 입력
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  // 패스워드 입력
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // 내용 입력
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  // 평점 입력
  const onChangeRating = (value: number) => {
    setRating(value);
  };

  // 등록하기
  const onClickSubmit = async () => {
    if (writer === "") {
      Modal.warning({
        content: "작성자를 입력해주세요.",
      });
      return;
    }
    if (password === "") {
      Modal.warning({
        content: "비밀번호를 입력해주세요.",
      });
      return;
    }
    if (contents === "") {
      Modal.warning({
        content: "내용을 입력해주세요.",
      });
      return;
    }

    if (writer !== "" && password !== "" && contents !== "") {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating,
            },
            boardId: String(router.query.boardId),
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });

        Modal.success({
          content: "댓글이 등록되었습니다.",
        });
        setWriter("");
        setPassword("");
        setContents("");
        setRating(0);
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            content: error.message,
          });
      }
    }
  };

  // 댓글 수정하기
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onClickUpdate = async () => {
    if (!contents && !rating) {
      Modal.warning({
        content: "수정된 내용이 없습니다.",
      });
      return;
    }
    if (!password) {
      Modal.warning({
        content: "비밀번호를 입력해주세요.",
      });
      return;
    }

    // 수정된 값이 없으면 그대로 입력하게 해줌
    const updateBoardCommentInput = {};
    if (contents) updateBoardCommentInput.contents = contents;
    if (rating) updateBoardCommentInput.rating = rating;
    /*
     const updateBoardCommentInput = {
       contents: "",
       rating :
     }

    */
    try {
      // 아이디가 없으면 실행하지 않음
      if (!props.el?._id) return;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
      Modal.success({
        content: "댓글이 수정되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return (
    <BoardCommentWriteUI
      writer={writer}
      password={password}
      contents={contents}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onChangeRating={onChangeRating}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      el={props.el}
      rating={rating}
    />
  );
}
