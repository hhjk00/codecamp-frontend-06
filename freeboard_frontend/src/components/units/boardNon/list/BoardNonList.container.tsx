import { useEffect } from "react";
import BoardNonListUI from "./BoardNonList.presenter";

export default function BoardNonList(props) {
  useEffect(() => {
    props.fetchBoards();
  }, []);

  return <BoardNonListUI dataBoards={props.dataBoards} />;
}
