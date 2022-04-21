import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_USER_LOGGED_IN,
} from "./BoardList.queries";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import _ from "lodash";
import { useAuth } from "../../../commons/hooks/useAuth";

function BoardList() {
  useAuth();
  const router = useRouter();

  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);
  // const { data: dataUserLoggedIn } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickMoveWrite = () => {
    router.push("/boards/new");
  };

  const onClickMoveBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.currentTarget.id}`);
  };

  // 검색
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

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
export default BoardList;
