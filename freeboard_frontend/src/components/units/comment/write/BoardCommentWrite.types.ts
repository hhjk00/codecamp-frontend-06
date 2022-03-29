import { ChangeEvent } from "react";

export interface IBoardCommentUIProps {
  writer: string;
  password: string;
  contents: string;
  rating: number;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onChangeRating: (value: number) => void;
}
