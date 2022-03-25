import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function BoardList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);

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
      onClickMoveWrite={onClickMoveWrite}
      onClickMoveBoardDetail={onClickMoveBoardDetail}
    />
  );
}
