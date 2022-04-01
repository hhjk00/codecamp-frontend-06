import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const onClickMoveWrite = () => {
    router.push("/boards/new");
  };

  const onClickMoveBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      dataBoardsCount={dataBoardsCount?.fetchBoardsCount}
      onClickMoveWrite={onClickMoveWrite}
      onClickMoveBoardDetail={onClickMoveBoardDetail}
      refetch={refetch}
    />
  );
}
