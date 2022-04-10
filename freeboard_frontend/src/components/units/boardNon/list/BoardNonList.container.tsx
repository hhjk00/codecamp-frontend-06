import { useEffect, useState } from "react";
import BoardNonListUI from "./BoardNonList.presenter";
import {
  collection,
  getFirestore,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../../../pages/_app";

export default function BoardNonList() {
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  useEffect(() => {
    async function fetchBoards() {
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setDataBoards(boards);
    }
    fetchBoards();
  }, []);

  return <BoardNonListUI dataBoards={dataBoards} />;
}
