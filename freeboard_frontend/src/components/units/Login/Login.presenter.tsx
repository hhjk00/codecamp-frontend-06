import Head from "next/head";
import Input01 from "../../commons/inputs/01";
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
            <form onSubmit={props.handleSubmit(props.onClickLogin)}>
              <Input01
                type="text"
                placeholder="Email"
                register={{ ...props.register("email") }}
              />
              <div style={{ margin: "10px" }}></div>
              <Input01
                type="password"
                placeholder="Password"
                register={{ ...props.register("password") }}
              />
              <div style={{ margin: "10px" }}></div>
              <S.Button>Login</S.Button>
            </form>
          </S.LoginWrapper>

          <S.TextWrapper>
            <S.Text>회원이 아니신가요?</S.Text>
            <S.SignUp onClick={props.onClickSignUp}>SIGN UP</S.SignUp>
          </S.TextWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
