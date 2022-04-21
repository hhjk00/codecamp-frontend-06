import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import UsedItemWriteUI from "./UsedItemWrite.presenter";
import { CREATE_USED_ITEM } from "./UsedItemWrite.queries";

export default function UsedItemWrite() {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  const onClickSubmit = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            useditemAddress: {
              zipcode: data.zipcode,
              address: data.address,
              addressDetail: data.addressDetail,
              lat: data.lat,
              lng: data.lng,
            },
            images: data.images,
          },
        },
      });
      Modal.success({
        content: "게시글이 등록되었습니다.",
      });
      router.push(`markets/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  return (
    <UsedItemWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
    />
  );
}
