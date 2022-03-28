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

export default function BoardCommentWrite() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [value, setValue] = useState(3);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const handleChange = (value: number) => {
    setValue(value);
  };

  // 등록하기
  const onClickSubmit = async () => {
    if (writer === "") {
      alert("작성자를 입력해주세요.");
    }
    if (password === "") {
      alert("비밀번호를 입력해주세요.");
    }
    if (contents === "") {
      alert("내용을 입력해주세요.");
    }

    if (writer !== "" && password !== "" && contents !== "") {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating: value,
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

        alert("댓글이 등록되었습니다.");
        setWriter("");
        setPassword("");
        setContents("");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <BoardCommentUI
      writer={writer}
      password={password}
      contents={contents}
      value={value}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      handleChange={handleChange}
    />
  );
}
