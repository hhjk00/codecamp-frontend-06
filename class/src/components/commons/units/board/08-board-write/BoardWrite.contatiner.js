// 컨테이너 컴포넌트

import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [data, setData] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const conClickUpdate = async () => {
    // 수정하기 함수
    await updateBoard({
      variables: {
        number: Number(router.query.mynumber),
        writer: myWriter,
        title: myTitle,
        contents: myContents,
      }, // 어떤 게시글을 수정할것인가
    });
    alert("게시글 수정에 성공하였습니다!");
    router.push(`/08-05-boards/${router.query.mynumber}`);
  };

  const callGraphqlApi = async () => {
    // 등록하기 함수
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    // console.log(result);
    // console.log(result.data.createBoard.message);
    // setData(result.data.createBoard.message);
    alert("게시글 등록에 성공하였습니다!");
    router.push(`/08-05-boards/${result.data.createBoard.number}`);
  };

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);

    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);

    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setMyContents(event.target.value);

    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      callGraphqlApi={callGraphqlApi}
      conClickUpdate={conClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
    />
  );
}
