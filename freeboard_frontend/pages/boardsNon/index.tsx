import BoardNonList from "../../src/components/units/boardNon/list/BoardNonList.container";
import BoardNon from "../../src/components/units/boardNon/write/BoardNonWrite.container";

// 목록 페이지
export default function BoardsNonPage() {
  return (
    <div>
      <BoardNon />
      <BoardNonList />;
    </div>
  );
}
