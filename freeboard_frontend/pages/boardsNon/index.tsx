import BoardNonList from "../../src/components/units/boardNon/list/BoardNonList.container";
import BoardNon from "../../src/components/units/boardNon/write/BoardNonWrite.container";
import {
  collection,
  getFirestore,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";
import { useState } from "react";

// 목록 페이지
export default function BoardsNonPage() {
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  async function fetchBoards() {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const boards = result.docs.map((el) => el.data());
    setDataBoards(boards);
  }

  return (
    <div>
      <BoardNon dataBoards={dataBoards} fetchBoards={fetchBoards} />
      <BoardNonList fetchBoards={fetchBoards} />;
    </div>
  );
}
