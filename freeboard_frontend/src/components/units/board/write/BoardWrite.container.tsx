import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IEditBoardInput } from "./BoardWrite.types";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite(props: IBoardWriteProps) {
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState("");
  const [writerError, setWriterError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    if (event.target.value !== "") {
      setWriterError("");
    }

    if (
      event.target.value !== "" &&
      password !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (
      writer !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (
      writer !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (
      writer !== "" &&
      password !== "" &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 수정하기
  const onClickEdit = async () => {
    const updateBoardInput: IEditBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    await updateBoard({
      variables: {
        updateBoardInput: {
          title: title,
          contents: contents,
        },
        password: password,
        boardId: router.query.boardId,
      },
    });
    alert("수정이 완료되었습니다.");
    router.push(`/boards/${router.query.boardId}`);
  };

  // 등록하기
  const onClickSubmit = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요!");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요!");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요!");
    }
    if (contents === "") {
      setContentsError("내용을 입력해주세요!");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      alert("게시물이 등록되었습니다.");

      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
            },
          },
        });

        console.log(result);
        console.log(result.data.createBoard.message);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
