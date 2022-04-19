// 로그인 된 사람만 이용 가능한 페이지
import { useAuth } from "../../src/components/commons/hooks/useAuth";

function CustomHooksUseAuthPage() {
  useAuth(); // 검증

  return <div>철수의 프로필 페이지입니다!!</div>;
}

export default CustomHooksUseAuthPage;
// 이렇게 하면 먼저 실행!
