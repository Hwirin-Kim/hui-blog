---
title: 블로그에 SEO 삽입!
description: 일단 Default seo를 작성해보자
date: "2023-02-26"
category: nextjs
published: true
tags: ["blog만들기", "Next.js", "SEO"]
---

# SEO란?

## SEO 정의

SEO(Serch Engine Optimization)란 검색 엔진으로부터 웹사이트나 웹페이지에 대한 웹사이트 트래픽의 품질과 양을 개선하는 과정이다. </br>

웹페이지 검색엔진이 자료를 수집한 뒤 순위를 매겨 검색결과를 보여주게 되는데, 유저가 검색한 검색 결과에서 상위에 노출 시키기 위한 전략인 것이다. </br>

## SEO 작업

그러면 SEO작업에는 어떤 일들이 있을까?

### 키워드 연구 및 분석

각각의 분야에서 어떤 검색어를 자주 사용하는지 분석한다.

### 웹페이지 구조 및 컨텐츠 개선

웹페이지의 구조를 검색엔진이 쉽게 읽을 수 있도록 개선하고, 페이지 제목, 메타 설명, 내용등의 컨텐츠를 최적화 시킨다.

### 외부 링크 확보하기

Backlink를 늘리는 작업이다. 백링크란 다른 웹사이트에서 현재 대상 웹사이트로 연결되는 링크를 의미하는데, 이 작업은 검색엔진이 해당 웹사이트를 신뢰할 수 있는 인기 사이트로 인식하여 검색결과에서 상위에 노출될 수 있도록 한다.

### 속도 최적화

사이트 속도를 개선하여 검색엔진과 사용자 모두에게 최적화된 경험을 제공한다.

### 모바일 최적화

모바일에서의 검색 및 이용 경험을 개선하여 검색엔진에서 상위에 노출될 수 있도록 한다.

### 검색 엔진 등록 및 모니터링

검색엔진에 사이트를 등록하고, 검색엔진에서 상위에 노출되는지 모니터링 한다. 이를 위해 각 웹사이트 (구글,네이버,다음 등..)의 웹마스터 도구를 이용하여 웹사이트를 등록하고 크롤링되어야 할 페이지를 설정하는 작업이 필요하다. </br>
이 경우 대상 사이트가 어떤 검색어로 노출이 되고 사용자가 유입 되는지 모니터링이 가능하고, 이를 통해 검색어 최적화 작업을 진행할 수 있다.

---

## Default Seo 작성

일단 나는 작업 순서를 웹페이지에 검색엔진이 쉽게 크롤링 가능하도록 하는 제목과 메타태그등을 먼저 작성한 후 검색엔진에 등록 하려고 한다. </br>

일단 test를 위해 전체 페이지에서 공통적으로 보여지게 되는 Default SEO를 작성했다.

### next/head 사용

일단 나는 next/head를 사용해서 Head 컴포넌트를 만들었다. 그리고 \_app.js 파일에 넣어서 모든 페이지에서 해당 태그들이 보이도록 설정했다.

```javascript
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
```

일단 위처럼 컴포넌트로 따로 빼서 작성하였다. 아직 블로그 이미지를 만들지 못해서 og태그에 이미지를 넣진 못했다.
</br>

### \_app.js 에 적용하기

\_app.js 파일은 각각의 페이지가 초기화될 때 로딩되는 파일이므로 이곳에 공통적으로 사용할 메타태그를 넣기로 했다.

```javascript
import Layout from "@/components/layout/Layout.jsx";
import "@/styles/globals.scss";
import MyProvider from "@/lib/CategoryContext";
import { DefaultSEO } from "@/components/seo/DefaultSeo";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <MyProvider>
        <DefaultSEO />
        <Component {...pageProps} />
      </MyProvider>
    </Layout>
  );
}
```

이렇게 아까 작성해둔 DefaultSEO를 import 하여 넣었다. </br>
그리고 개발자 도구에 가서 `<head>`에 정보가 잘 들어갔는지 확인해 봤다.

![SEO적용 후 개발자 도구](https://user-images.githubusercontent.com/113874038/221420349-8a7dbf65-015d-4c40-b6f9-4d53ce168b34.png)
</br>
위 이미지처럼 내가 작성한 태그들이 잘 들어가는것을 확인할 수 있었다.

## 결론

오늘은 간단하게 default SEO만 작성하여 공통적으로 검색되어야 할 부분만 작동하도록 하였다. 이제 블로그의 각 포스트마다 해당하는 정보들이 입력되도록 하여 더 많은 검색어 노출을 이끌어 내기만 하면 될것이다. 그리고 검색엔진에 등록 후 어떤 검색어가 유의미한지, 혹은 무의미한 유입이 있진 않은지 등을 파악하여 블로그를 개선해 나가면 될 것이다. </br>

나는 작은 블로그를 개설하는것이 쉽다고 생각하였는데, 생각보다 신경써야 할 요소가 많았고, 아직도 다 해결하지 못했으며, 생각지 못한 부분을 많이 공부하도록 도와주는것 같아서 너무 좋다.
