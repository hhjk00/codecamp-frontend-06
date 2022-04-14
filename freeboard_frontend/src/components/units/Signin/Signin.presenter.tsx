export default function SignInUI(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="닉네임을 입력해주세요."
        onChange={props.onChangeName}
      />
      {props.nameError}
      <br />
      <input
        type="text"
        placeholder="이메일을 입력해주세요."
        onChange={props.onChangeEmail}
      />
      {props.emailError}
      <br />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요."
        onChange={props.onChangePassword}
      />
      {props.passwordError}
      <br />
      <input
        type="password"
        placeholder="비밀번호를 한 번 더 입력해주세요."
        onChange={props.onChangePasswordMore}
      />
      {props.passwordMoreError}
      <br />
      <button onClick={props.onClickLogin}>회원가입</button>
    </div>
  );
}
