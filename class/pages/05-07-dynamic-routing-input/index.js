// import axios from 'axios'
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    //   const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
    //                              get=메서드        endpoint= posts/1

    try {
      const result = await callApi({
        variables: { writer: myWriter, title: myTitle, contents: myContents },
      }); // graphql-api방식
      console.log(result);
      console.log(result.data.createBoard.message);
      alert("게시글 등록에 성공했어요!");
      alert("상세 페이지로 이동해 볼까요?");
      router.push(
        `/05-08-dynamic-routed-input/${result.data.createBoard.number}`
      );
      //             ↑ 템플릿 리터럴

      // const banana = 3
      // const apple = 2

      // "철수는 바나나를" + banana + "개 가지고 있고," + "사과를" + apple + "개 가지고 있습니다."
      // `철수는 바나나를" + ${banana} + "개 가지고 있고," + "사과를" + ${apple} + "개 가지고 있습니다.`
    } catch (error) {
      alert(error.message);
    }
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
