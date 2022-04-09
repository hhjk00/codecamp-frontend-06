import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import Upload01UI from "./Upload01.presenter";
import { UPLOAD_FILE } from "./Upload01.queries";
import { Modal } from "antd";
import { checkValidationImage } from "./Upload01.validation";

export default function Upload01(props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <Upload01UI
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      fileUrl={props.fileUrl}
    />
  );
}
