import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBoardCommentWriteProps {
  el?: any;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

export interface IBoardCommentWriteUIProps {
  writer: string;
  password: string;
  contents: string;
  rating?: number;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onChangeRating: (value: number) => void;
  isEdit: boolean;
}
