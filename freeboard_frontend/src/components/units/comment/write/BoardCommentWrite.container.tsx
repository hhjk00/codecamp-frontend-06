import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { ChangeEvent, MouseEvent } from "react";
import BoardCommentUI from "./BoardCommentWrite.presenter";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { IUpdateBoardCommentInput } from "./BoardCommentWrite.types";

export default function BoardComment() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);
  const [boardCommentId, setBoardCommentId] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickWriter = (event: MouseEvent<HTMLDivElement>) => {
    alert(event.currentTarget.id + "님이 작성한 댓글입니다.");
  };

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

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

        alert("댓글이 등록되었습니다.");
        setWriter("");
        setPassword("");
        setContents("");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  //수정하기
  const onClickUpdate = async () => {
    if (!contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (contents) updateBoardCommentInput.contents = contents;

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
            rating,
          },
          password,
          boardCommentId,
        },
      });
      alert("댓글이 수정되었습니다.");
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardCommentUI
      data={data}
      writer={writer}
      password={password}
      contents={contents}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onClickWriter={onClickWriter}
    />
  );
}
