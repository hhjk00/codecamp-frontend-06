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

export default function SignUp() {
  const emailCheck = /^\w+@\w+\.\w+$/;
  const passwordCheck =
    /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
  // : 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const router = useRouter();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onClickJoin = async (data) => {
    if (data.password !== data.passwordMore) {
      alert("비밀번호가 일치하지 않습니다.");
    }

    if (
      emailCheck.test(data.email) &&
      passwordCheck.test(data.password) &&
      data.password === data.passwordMore
    ) {
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
      } catch (error) {
        if (error instanceof Error) {
          Modal.error({
            content: error.message,
          });
        }
      }
      Modal.success({ content: "회원가입을 축하합니다!" });
    }
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  return (
    <SignUpUI
      onClickLogin={onClickLogin}
      onClickJoin={onClickJoin}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
