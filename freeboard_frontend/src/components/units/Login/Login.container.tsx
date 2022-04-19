// import { useMutation } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onClickLogin = async (data) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      Modal.success({ content: "로그인 되었습니다." });
      router.push("/boards");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  const onClickSignUp = () => {
    router.push("/signUp");
  };

  return (
    <LoginUI
      onClickLogin={onClickLogin}
      onClickSignUp={onClickSignUp}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
}
