// 목록 페이지
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import BoardList from "../../src/components/units/board/list/BoardList.container";

function BoardsPage() {
  return (
    <div>
      <BoardList />
    </div>
  );
}
export default withAuth(BoardsPage);
