import Head from "next/head";

export const DefaultSEO = () => {
  return (
    <Head>
      <title>휘블로그</title>
      <meta name="description" content="프론트엔드 개발자의 블로그입니다." />
      <meta property="og:title" content="휘블로그" />
      <meta
        property="og:description"
        content="프론트엔드 개발자의 블로그입니다."
      />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://hui-blog.co.kr" />
      {/* <meta property="og:image" content="" /> */}
      <meta property="og:article:author" content="hwirin" />
    </Head>
  );
};
