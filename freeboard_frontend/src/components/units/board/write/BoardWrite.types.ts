import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IEditBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onCompleteAddressSearch: (data: any) => void;

  onClickAddressSearch: () => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;

  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;

  isActive: boolean;
  isEdit: boolean;
  data?: any;

  isOpen: boolean;
  zipcode: string;
  address: string;
  addressDetail: string;
}
