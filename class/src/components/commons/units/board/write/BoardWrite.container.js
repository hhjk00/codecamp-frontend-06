import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
//presenter에 export가 하나니까 BoardWriteUI이름 바꿔서 적용해도 됨
import { CREATE_BOARD } from "./BoardWrite.queries";


export default function BoardWrite() {
  // import해줘야하기 때문에 이름이 중요

  const [isActive, setIsActive] = useState(false);

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    //   const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식

    const result = await callApi({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    }); // graphql-api방식
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
    // console.log(result.data.title)
    // setData(result.data.title)
  };

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
    
    if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  };

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);

    if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  };

  const onChangeContents = (event) => {
    setMyContents(event.target.value);

    if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  };

  return <BoardWriteUI 
  onChangeWriter={onChangeWriter} // key={value} onChangeWriter: onChangeWriter
  onChangeTitle={onChangeTitle}
  onChangeContents={onChangeContents}
  callGraphqlApi={callGraphqlApi}
  isActive={isActive}
        />;

}
