import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { mapAddressState, mapLocationState } from "../../../../commons/store";
import UsedItemWriteUI from "./UsedItemWrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./UsedItemWrite.queries";
import { IUpdateUseitemInput } from "./UsedItemWrite.types";
import { schema } from "./UsedItemWrite.validation";

export default function UsedItemWrite(props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState,
    setValue,
    getValues,
    trigger,
    reset,
  } = useForm({
    resolver: yupResolver(schema), // props.isEdit ? nonSchema : schema
    mode: "onChange",
  });
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [tags, setTags] = useState([]);

  const [mapAddress, setMapAddress] = useRecoilState(mapAddressState);
  const [mapLocation] = useRecoilState(mapLocationState);

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  // 에디터
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  // useEffect로 data가 들어오면 contents 값에 data에서 불러온 contents 값 넣어주기
  useEffect(() => {
    reset({ contents: props.data?.fetchUseditem.contents });
  }, [props.data]);

  // 태그
  const onKeyUpTag = (event) => {
    if (event.target.value === " ") {
      event.target.value = "";
      return;
    }

    if (event.keyCode === 32) {
      setTags([...tags, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  // 이미지
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  // 주소 1
  const onChangeAddress = (event) => {
    setMapAddress(event.target.value);
  };

  // 등록
  const onClickSubmit = async (data) => {
    if (data.name && data.remarks && data.contents && data.price) {
      try {
        const result = await createUseditem({
          variables: {
            createUseditemInput: {
              name: data.name,
              remarks: data.remarks,
              contents: data.contents,
              price: Number(data.price),
              tags,
              useditemAddress: {
                //   zipcode: data.zipcode,
                address: mapAddress,
                addressDetail: data.addressDetail,
                lat: mapLocation.La,
                lng: mapLocation.Ma,
              },
              images: fileUrls,
            },
          },
        });
        Modal.success({
          content: "게시글이 등록되었습니다.",
        });
        console.log(result.data);
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

  // 수정
  const onClickUpdate = async (data) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !data.name &&
      !data.remarks &&
      !data.contents &&
      !data.price &&
      !data.tags &&
      !data.address &&
      !data.addressDetail &&
      !isChangedFiles &&
      !data.lat &&
      !data.lng
    ) {
      Modal.warning({
        content: "수정한 내용이 없습니다.",
      });
      return;
    }

    const updateUseditemInput: IUpdateUseitemInput = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.remarks) updateUseditemInput.remarks = data.remarks;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.price) updateUseditemInput.price = Number(data.price);
    if (tags) updateUseditemInput.tags = tags;
    if (data.address || data.addressDetail || data.lat || data.lng) {
      updateUseditemInput.useditemAddress = {};
      if (mapAddress) updateUseditemInput.useditemAddress.address = mapAddress;
      if (data.addressDetail)
        updateUseditemInput.useditemAddress.addressDetail = data.addressDetail;
      if (mapLocation.La)
        updateUseditemInput.useditemAddress.lat = mapLocation.La;
      if (mapLocation.Ma)
        updateUseditemInput.useditemAddress.lng = mapLocation.Ma;
    }
    if (isChangedFiles) updateUseditemInput.images = fileUrls;

    await updateUseditem({
      variables: {
        updateUseditemInput,
        useditemId: String(router.query.useditemId),
      },
    });
    console.log(updateUseditemInput);
    Modal.success({
      content: "수정이 완료되었습니다.",
    });
    router.push(`/markets/${router.query.useditemId}`);
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
      onKeyUpTag={onKeyUpTag}
      tags={tags}
      isEdit={props.isEdit}
      data={props.data}
      onClickUpdate={onClickUpdate}
      getValues={getValues}
    />
  );
}
