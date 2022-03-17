// import axios from 'axios'
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

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
  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    //   const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
    //get=메서드                 endpoint= posts/1

    const result = await callApi({
      variables: {
        writer: "김혜진",
        title: "안녕하세요",
        contents: "반갑습니다",
      },
    }); // graphql-api방식
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
    // console.log(result.data.title)
    // setData(result.data.title)
  };

  return (
    <div>
      <div>{data}</div>
      <button onClick={callGraphqlApi}>Graphql-API 요청하기!!!</button>
    </div>
  );
}
