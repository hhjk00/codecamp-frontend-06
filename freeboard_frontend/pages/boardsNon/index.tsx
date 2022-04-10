import BoardNonList from "../../src/components/units/boardNon/list/BoardNonList.container";
import BoardNon from "../../src/components/units/boardNon/write/BoardNonWrite.container";

export default function BoardsNonPage() {
  return (
    <div>
      <BoardNon />
      <BoardNonList />;
    </div>
  );
}
