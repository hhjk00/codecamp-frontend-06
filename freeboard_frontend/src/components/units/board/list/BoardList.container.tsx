import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import _ from "lodash";

export default function BoardList() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);

  const onClickMoveWrite = () => {
    router.push("/boards/new");
  };

  const onClickMoveBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.currentTarget.id}`);
  };

  // 검색
  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <BoardListUI
      data={data}
      keyword={keyword}
      // dataUserLoggedIn={dataUserLoggedIn}
      dataBoardsCount={dataBoardsCount?.fetchBoardsCount}
      onClickMoveWrite={onClickMoveWrite}
      onClickMoveBoardDetail={onClickMoveBoardDetail}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
