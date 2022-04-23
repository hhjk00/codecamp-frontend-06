import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useMoveToPage } from "../src/components/commons/hooks/useMoveToPage";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    160.18deg,
    #03001e 0.47%,
    #7303c0 50.52%,
    #ec38bc 102.52%
  );
  height: 100vh;
  font-family: "myFont";
`;

const TitleWrapper = styled.div`
  width: 440px;
  font-size: 100px;
  font-weight: bold;
`;

const TitleJoin = styled.span`
  color: white;
`;

const TitleUs = styled.span`
  color: #f2a405;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 420px;
  padding-top: 20px;
  border-top: 1px solid white;
`;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  width: 150px;
  height: 100px;
  :hover {
    color: black;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const NonMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  width: 150px;
  height: 100px;
  :hover {
    color: black;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Icon = styled(PersonIcon)`
  font-size: 40px;
`;
const NonIcon = styled(PersonOutlineIcon)`
  font-size: 40px;
`;
const Text = styled.div`
  font-size: 20px;
`;

export default function Home() {
  const router = useRouter();

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <Wrapper>
      <Head>
        <title>ABC - Welcome</title>
      </Head>

      <TitleWrapper>
        <TitleJoin>JOIN </TitleJoin>
        <TitleUs>US</TitleUs>
        <TitleJoin>!</TitleJoin>
      </TitleWrapper>

      <IconWrapper>
        <Member onClick={onClickMoveToPage("/login")}>
          <Icon></Icon>
          <Text>로그인</Text>
        </Member>

        <NonMember onClick={onClickMoveToPage("signUp")}>
          <NonIcon></NonIcon>
          <Text>회원가입</Text>
        </NonMember>
      </IconWrapper>
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">JOIN US!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div onClick={onClickMember} className={styles.grid}>
          <a className={styles.card}>
            <h2>회원 로그인 &rarr;</h2>
            <p>회원으로 입장하세요</p>
          </a>

          <a onClick={onClickNonMember} className={styles.card}>
            <h2>비회원 로그인 &rarr;</h2>
            <p>로그인 없이 입장하세요</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </Wrapper>
  );
}
