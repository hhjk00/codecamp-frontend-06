//상세보기 페이지
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardComment from "../../../src/components/units/comment/write/BoardCommentWrite.container";

export default function BoardsDetailPage() {
  return (
    <div>
      <BoardDetail />
      <BoardComment />
    </div>
  );
}
