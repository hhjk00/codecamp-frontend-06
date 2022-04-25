import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { MapState } from "../../../../commons/store";
import UsedItemWriteUI from "./UsedItemWrite.presenter";
import { CREATE_USED_ITEM } from "./UsedItemWrite.queries";
import { schema } from "./UsedItemWrite.validation";

export default function UsedItemWrite() {
  const router = useRouter();
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [mapState, setMapState] = useRecoilState(MapState);

  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  // 에디터
  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  // 이미지
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onChangeAddress = (event) => {
    setMapState(event.target.value);
  };

  // 등록
  const onClickSubmit = async (data) => {
    if (
      data.name &&
      data.remarks &&
      data.contents &&
      data.price &&
      data.contents
    ) {
      try {
        const result = await createUseditem({
          variables: {
            createUseditemInput: {
              name: data.name,
              remarks: data.remarks,
              contents: data.contents,
              price: Number(data.price),
              tags: data.tags,
              // useditemAddress: {
              //   zipcode: data.zipcode,
              //   address: data.address,
              //   addressDetail: data.addressDetail,
              //   lat: data.lat,
              //   lng: data.lng,
              // },
              images: data.images,
            },
          },
        });
        Modal.success({
          content: "게시글이 등록되었습니다.",
        });
        console.log(result);
        router.push(`/markets/${result.data?.createUseditem._id}`);
      } catch (error) {
        if (error instanceof Error) {
          Modal.error({
            content: error.message,
          });
        }
      }
    }
  };

  return (
    <UsedItemWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onChangeContents={onChangeContents}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onChangeAddress={onChangeAddress}
    />
  );
}
