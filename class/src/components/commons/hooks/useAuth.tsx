import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useAuth() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // 권한 분기 로직 추가하기
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해야합니다");
      router.push("/23-04-login-check");
    }
  }, []);

  return {
    isLoading,
  };
}
