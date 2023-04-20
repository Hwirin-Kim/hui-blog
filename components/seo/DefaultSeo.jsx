import Head from "next/head";

export const DefaultSEO = () => {
  return (
    <Head>
      <title>휘블로그</title>
      <meta
        name="google-site-verification"
        content="U4QhBYYRBpO4VfRmqeEicVviKk7hySQClVxchjD-cVo"
      />
      <meta
        name="description"
        content="주니어 프론트엔드 개발자 휘의 개인 블로그입니다. 공부한 내용을 기록하고 공유하는 목적으로 개설하였습니다."
      />

      <meta property="og:title" content="휘블로그" />
      <meta
        property="og:description"
        content="주니어 프론트엔드 개발자 휘의 개인 블로그입니다. 공부한 내용을 기록하고 공유하는 목적으로 개설하였습니다."
      />
      <meta property="og:type" content="article" />
      {/* 트위터 카드 태그 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="휘블로그" />
      <meta
        name="twitter:description"
        content="주니어 프론트엔드 개발자 휘의 개인 블로그입니다. 공부한 내용을 기록하고 공유하는 목적으로 개설하였습니다."
      />
    </Head>
  );
};
