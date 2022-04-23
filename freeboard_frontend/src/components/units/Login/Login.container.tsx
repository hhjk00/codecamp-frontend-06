// import { useMutation } from "@apollo/client";
import { useApolloClient, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import LoginUI from "./Login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./Login.queries";
import { schema } from "./Login.validation";

export default function Login() {
  const [, setUserInfo] = useRecoilState(userInfoState);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation(LOGIN_USER);

  const router = useRouter();
  const client = useApolloClient();
  const { onClickMoveToPage } = useMoveToPage();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: any) => {
    // 로그인 하기
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      console.log(accessToken);

      // 유저 정보 받아오기
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
      const userInfo = resultUserInfo.data.fetchUserLoggedIn;
      console.log(userInfo);

      // 글로벌 스테이트에 저장하기
      setAccessToken(accessToken);
      setUserInfo(userInfo);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      // 로그인 성공페이지로 이동하기
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

  return (
    <LoginUI
      onClickLogin={onClickLogin}
      onClickMoveToPage={onClickMoveToPage}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
