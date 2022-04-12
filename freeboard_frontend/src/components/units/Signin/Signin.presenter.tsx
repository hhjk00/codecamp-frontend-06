export default function SignInUI(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="이메일을 입력해주세요."
        onChange={props.onChangeEmail}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={props.onChangePassword}
      />
      <button onClick={props.onClickLogin}>로그인</button>
    </div>
  );
}
