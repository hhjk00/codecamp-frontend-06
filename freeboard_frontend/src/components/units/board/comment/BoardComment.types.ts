import { ChangeEvent } from "react";

export interface IBoardCommentUIProps {
  data?: any;
  writerError: string;
  passwordError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
}
