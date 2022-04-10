import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";
import { useState } from "react";
import { firebaseApp } from "../../../../../pages/_app";
import BoardNonUI from "./BoardNonWrite.presenter";

export default function BoardNon() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer,
      title,
      contents,
    });

    const result = await getDocs(board);
    const boards = result.docs.map((el) => el.data());
    setDataBoards(boards);
  };

  return (
    <BoardNonUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
