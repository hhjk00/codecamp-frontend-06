import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>;
  // 이름이 안나오는 이유: accessToken을 넘겨주는 header가 없어서!
}
