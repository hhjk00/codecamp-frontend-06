import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../commons/types/generated/types";

export interface Pagination01Props {
  refetch: (
    variables?: Partial<IQueryFetchBoardArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoard">>>;
  dataBoardsCount: number;
}
