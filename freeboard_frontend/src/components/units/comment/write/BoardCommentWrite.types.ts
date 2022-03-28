import { PasswordProps } from "antd/lib/input";
import { ChangeEvent } from "react";

export interface IBoardCommentUIProps {
  data?: any;
  writer: string;
  Password: string;
  contents: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
}
