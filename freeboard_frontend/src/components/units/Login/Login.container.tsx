// import { useMutation } from "@apollo/client";
import { useState } from "react";
import LoginUI from "./Login.presenter";
// import { LOGIN_USER } from "./Login.queries";

export default function Login() {
  //   const [loginUser] = useMutation(LOGIN_USER);

  const emailCheck = /^\w+@\w+\.\w+$/;
  const passwordCheck =
    /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
  // : 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = () => {
    if (!emailCheck.test(email)) {
      alert("이메일 형식에 맞지 않습니다.");
    } else {
      alert("이메일 형식에 적합합니다.");
    }
    if (!passwordCheck.test(password)) {
      alert("비밀번호 형식에 맞지 않습니다.");
    } else {
      alert("비밀번호 형식에 적합합니다.");
    }
  };

  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}
