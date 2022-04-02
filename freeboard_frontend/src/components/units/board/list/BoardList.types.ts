import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data: any;
  onClickMoveWrite: () => void;
  onClickMoveBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  dataBoardsCount?: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoard">>>;
}
