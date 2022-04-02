import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentItem from "./BoardCommentList.presentItem";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <div>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => (
          <BoardCommentItem key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
