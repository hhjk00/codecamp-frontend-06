import Head from "next/head";
import * as S from "./Login.styles";

export default function LoginUI(props) {
  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <S.Container>
        <S.Wrapper>
          <S.TitleWrapper>
            <S.Icon />
            <S.TiTle>SIGN IN</S.TiTle>
          </S.TitleWrapper>

          <S.LoginWrapper>
            <S.Input
              type="text"
              placeholder="Email"
              onChange={props.onChangeEmail}
            />
            <S.Input
              type="password"
              placeholder="Password"
              onChange={props.onChangePassword}
            />
            <S.Button onClick={props.onClickLogin}>Login</S.Button>
          </S.LoginWrapper>

          <S.BottomWrapper>
            <S.TextWrapper>
              <S.Text>회원이 아니신가요?</S.Text>
              <S.SignUp onClick={props.onClickJoin}>SIGN UP</S.SignUp>
            </S.TextWrapper>
          </S.BottomWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
