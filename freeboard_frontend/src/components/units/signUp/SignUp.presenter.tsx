import Input01 from "../../commons/inputs/01";
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
          <form onSubmit={props.handleSubmit(props.onClickJoin)}>
            <Input01
              type="text"
              placeholder="UserName"
              register={{ ...props.register("name") }}
            />
            <S.Error>{props.formState.errors.name?.message}</S.Error>
            <Input01
              type="text"
              placeholder="Email"
              register={{ ...props.register("email") }}
            />
            <S.Error>{props.formState.errors.email?.message}</S.Error>
            <Input01
              type="password"
              placeholder="Password"
              register={{ ...props.register("password") }}
            />
            <S.Error>{props.formState.errors.password?.message}</S.Error>
            <Input01
              type="password"
              placeholder="Password Check"
              register={{ ...props.register("passwordMore") }}
            />
            <S.Error>{props.formState.errors.passwordMore?.message}</S.Error>
            <S.Button>Join</S.Button>
          </form>
        </S.LoginWrapper>

        <S.TextWrapper>
          <S.Text>이미 회원이신가요?</S.Text>
          <S.Join onClick={props.onClickMoveToPage("/login")}>LOGIN</S.Join>
        </S.TextWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
