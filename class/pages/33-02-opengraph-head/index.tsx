import Head from "next/head";

export default function OpengraphPage() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="내만의 사이트" />
        <meta property="og:description" content="접속을 환영합니다" />
        <meta property="og:image" content="http://~~" />
      </Head>
      <h1>오픈그래프 연습 페이지</h1>
    </div>
  );
}
