import { useMutation } from "@apollo/client";
import { useState, ChangeEvent, MouseEvent } from "react";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentWrite.queries";
import BoardCommentUI from "./BoardCommentWrite.presenter";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function BoardCommentWrite() {
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
    }
    if (password === "") {
      Modal.warning({
        content: "비밀번호를 입력해주세요.",
      });
    }
    if (contents === "") {
      Modal.warning({
        content: "내용을 입력해주세요.",
      });
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
      } catch (error) {
        Modal.error({
          content: "댓글 등록에 실패했습니다.",
        });
      }
    }
  };

  return (
    <BoardCommentUI
      writer={writer}
      password={password}
      contents={contents}
      rating={rating}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onChangeRating={onChangeRating}
    />
  );
}
