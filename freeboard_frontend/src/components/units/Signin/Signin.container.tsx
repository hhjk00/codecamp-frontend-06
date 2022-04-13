// import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import SignInUI from "./SignIn.presenter";

export default function SignIn() {
  //   const [loginUser] = useMutation(LOGIN_USER);

  const emailCheck = /^\w+@\w+\.\w+$/;
  const passwordCheck =
    /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
  // : 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMore, setPasswordMore] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordMoreError, setPasswordMoreError] = useState("");

  const router = useRouter();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  const onChangePasswordMore = (event) => {
    setPasswordMore(event.target.value);
    if (event.target.value !== "") {
      setPasswordMoreError("");
    }
  };

  const onClickLogin = () => {
    if (email === "") {
      setEmailError("이메일을 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (passwordMore === "") {
      setPasswordMoreError("비밀번호를 한번 더 입력해주세요.");
    }

    if (!emailCheck.test(email)) {
      alert("이메일 형식에 맞지 않습니다.");
    }

    if (!passwordCheck.test(password)) {
      alert("비밀번호 형식에 맞지 않습니다.");
    }

    if (password !== passwordMore) {
      alert("비밀번호가 일치하지 않습니다.");
    }

    if (
      emailCheck.test(email) &&
      passwordCheck.test(password) &&
      password === passwordMore
    ) {
      alert("회원가입을 축하합니다!");
      router.push("/login");
    }
  };

  return (
    <SignInUI
      emailError={emailError}
      passwordError={passwordError}
      passwordMoreError={passwordMoreError}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangePasswordMore={onChangePasswordMore}
      onClickLogin={onClickLogin}
    />
  );
}
