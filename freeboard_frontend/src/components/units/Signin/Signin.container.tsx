// import { useMutation } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import SignInUI from "./SignIn.presenter";
import { CREATE_USER } from "./SignIn.queries";

export default function SignIn() {
  //   const [loginUser] = useMutation(LOGIN_USER);

  const emailCheck = /^\w+@\w+\.\w+$/;
  const passwordCheck =
    /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
  // : 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMore, setPasswordMore] = useState("");
  const [name, setName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordMoreError, setPasswordMoreError] = useState("");
  const [nameError, setNameError] = useState("");

  const router = useRouter();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value) {
      setEmailError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }
  };

  const onChangePasswordMore = (event) => {
    setPasswordMore(event.target.value);
    if (event.target.value) {
      setPasswordMoreError("");
    }
  };

  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value) {
      setNameError("");
    }
  };

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onClickLogin = async () => {
    if (name === "") {
      setNameError("이름을 입력해주세요.");
    }
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
      try {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password,
              name,
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
      onChangeName={onChangeName}
      onClickLogin={onClickLogin}
    />
  );
}
