// import { useMutation } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";

export default function Login() {
  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      Modal.success({ content: "로그인 되었습니다." });
      router.push("/boards");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickJoin = () => {
    router.push("/signUp");
  };

  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      onClickJoin={onClickJoin}
    />
  );
}
