import styled from "@emotion/styled";
import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IEditBoardInput {
  title?: string;
  contents?: string;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;

  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;

  isActive: boolean;
  isEdit: boolean;
  data?: any;
}
