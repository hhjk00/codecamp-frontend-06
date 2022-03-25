// import axios from 'axios'
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { IMutation, IMutationCreateBoardArgs } from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation mymutaion($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  let aaa : number = 3

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [data, setData] = useState("");
  const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD);
                                  //Pick = 유틸리티 타입

  const callGraphqlApi = async () => {
    //   const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
    //get=메서드                 endpoint= posts/1

    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    }); // graphql-api방식

    result.data?.createBoard?.message

    console.log(result);
    console.log(result.data?.createBoard?.message);
    if(result.data?.createBoard?.message) setData(result.data?.createBoard?.message);
    // console.log(result.data.title)
    // setData(result.data.title)
  };

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setMyContents(event.target.value);
  };

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자: <input type="text" onChange={onChangeWriter} /> <br />
      제목: <input type="text" onChange={onChangeTitle} /> <br />
      내용: <input type="text" onChange={onChangeContents} /> <br />
      <button onClick={callGraphqlApi}>Graphql-API 요청하기!!!</button>
    </div>
  );
}
