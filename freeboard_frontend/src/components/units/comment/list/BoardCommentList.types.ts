import { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent } from "react";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  isOpenDeleteModal: boolean;

  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;

  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onClickDelete: () => void;
  onClickWriter: (event: MouseEvent<HTMLDivElement>) => void;
}
