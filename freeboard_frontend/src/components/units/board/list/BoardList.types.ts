import { MouseEvent } from "react";

export interface IBoardListUIProps {
  data: any;
  onClickMoveWrite: () => void;
  onClickMoveBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
