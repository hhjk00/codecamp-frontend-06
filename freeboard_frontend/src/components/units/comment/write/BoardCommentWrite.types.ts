import { ChangeEvent } from "react";

export interface IBoardCommentUIProps {
  writer: string;
  password: string;
  contents: string;
  value: number;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  handleChange: (value: number) => void;
}
