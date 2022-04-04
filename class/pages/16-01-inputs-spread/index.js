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
  // const [myWriter, setMyWriter] = useState("");
  // const [myTitle, setMyTitle] = useState("");
  // const [myContents, setMyContents] = useState("");

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { ...inputs },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
    // console.log(result.data.title)
    // setData(result.data.title)
  };

  const onChangeInputs = (event) => {
    setInputs({
      [event.target.id]: event.target.value,
      ...inputs,
    });
  };

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자: <input type="text" id="writer" onChange={onChangeInputs} /> <br />
      제목: <input type="text" id="title" onChange={onChangeInputs} /> <br />
      내용: <input type="text" id="contents" onChange={onChangeInputs} /> <br />
      <button onClick={callGraphqlApi}>Graphql-API 요청하기!!!</button>
    </div>
  );
}
