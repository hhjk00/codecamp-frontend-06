import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardsNewUI from './BoardsNew.presenter'
import { CREATE_BOARD } from "./BoardsNew.queries"


export default function BoardsNew() {
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState("");
  const [writerError, setWriterError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);

    if (event.target.value !== "") {
      setWriterError("");
    }

    if(event.target.value !== "" && password !== "" && title !== "" && contents !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }

  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if(writer !== "" && event.target.value !== "" && title !== "" && contents !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }

  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if(writer !== "" && password !== "" && event.target.value !== "" && contents !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
    
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if(writer !== "" && password !== "" && title !== "" && event.target.value !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }

    
  };

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
      alert("게시물 등록에 성공하였습니다!"); 
      
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
    router.push(
      `/boards/${result.data.createBoard._id}`
    )

  } catch (error) {
    alert(error.message)
  }
}
  }

  return (
     <BoardsNewUI
     onChangeWriter={onChangeWriter}
     onChangePassword={onChangePassword}
     onChangeTitle={onChangeTitle}
     onChangeContents={onChangeContents}
     onClickSubmit={onClickSubmit}
     writerError={writerError}
     passwordError={passwordError}
     titleError={titleError}
     contentsError={contentsError}
     isActive={isActive}

     />
  )
;

}