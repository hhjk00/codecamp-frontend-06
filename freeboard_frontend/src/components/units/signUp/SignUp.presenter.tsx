import * as S from "./SignUp.styles";

export default function SignUpUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Icon />
          <S.TiTle>SIGN UP</S.TiTle>
        </S.TitleWrapper>

        <S.LoginWrapper>
          <S.Input
            type="text"
            placeholder="UserName"
            onChange={props.onChangeName}
          />
          <S.Error>{props.nameError}</S.Error>
          <S.Input
            type="text"
            placeholder="Email"
            onChange={props.onChangeEmail}
          />
          <S.Error>{props.emailError}</S.Error>
          <S.Input
            type="password"
            placeholder="Password"
            onChange={props.onChangePassword}
          />
          <S.Error>{props.passwordError}</S.Error>
          <S.Input
            type="password"
            placeholder="Password Check"
            onChange={props.onChangePasswordMore}
          />
          <S.Error>{props.passwordMoreError}</S.Error>
          <S.Button onClick={props.onClickJoin}>Join</S.Button>
        </S.LoginWrapper>

        <S.BottomWrapper>
          <S.TextWrapper>
            <S.Text>이미 회원이신가요?</S.Text>
            <S.Join onClick={props.onClickLogin}>LOGIN</S.Join>
          </S.TextWrapper>
        </S.BottomWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
