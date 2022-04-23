// import { useMutation } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import SignUpUI from "./SignUp.presenter";
import { CREATE_USER } from "./SignUp.queries";
import { schema } from "./SignUp.validation";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

export default function SignUp() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onClickJoin = async (data: any) => {
    if (data.password !== data.passwordMore) {
      Modal.warning({ content: "비밀번호가 일치하지 않습니다." });
    }

    if (data.password === data.passwordMore) {
      try {
        await createUser({
          variables: {
            createUserInput: {
              email: data.email,
              password: data.password,
              name: data.name,
            },
          },
        });
        Modal.success({ content: "회원가입을 축하합니다!" });
        router.push("/login");
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
    <SignUpUI
      onClickMoveToPage={onClickMoveToPage}
      onClickJoin={onClickJoin}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
