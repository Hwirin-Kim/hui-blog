---
title: semantic HTML
description: 왜 중요할까?
date: "2023-04-06"
category: javascript
published: true
tags: ["semantic"]
---

# semantic HTML

시맨틱 HTML이란 HTML요소가 문서의 구조와 의미를 명확하게 설명하도록 하는것이다. 이는 웹 페이지가 보다 의미론적이고 이해하기 쉽게 작성될 수 있도록 한다.

## SEO 최적화

검색 엔진 최적화(Search engine optimization)를 위해 시맨틱 HTML을 사용해야 한다. 검색 엔진은 웹 페이지의 내용을 분석하여 사용자 검색어와 일치하는 페이지를 제공한다. </br>

시맨틱 HTML은 웹페이지의 구조와 의미를 명확하게 설명하므로 검색 엔진이 웹 페이지를 더 잘 인식하고 분석할 수 있게 한다. </br>

예를 들어 제목요소(h1, h2, h3 등)는 검색 엔진이 웹 페이지의 주요 내용을 파악하는데 도움이 된다.

## 웹페이지의 접근성

시각장애인이나 기타 장애가 있는 사용자들은 스크린 리더러(screen reader)를 사용하여 웹페이지를 읽는다. 시맨틱 HTML은 스크린 리더러가 웹 페이지의 구조와 의미를 이해하도록 돕는다.

## 시맨틱 HTML 예시

- header: 웹 페이지나 섹션의 머리글을 나타낸다.

- nav: 웹 페이지의 메뉴나 내비게이션 영역을 나타낸다.

- section: 문서의 섹션을 나타내며, 일반적으로 제목과 내용을 포함한다.

- article: 문서나 페이지 내에서 독립적인 콘텐츠를 나타낸다. 예를 들어, 블로그 글이나 뉴스 기사 등이 해당된다.

- aside: 주요 콘텐츠와는 관련이 적은 보조 콘텐츠를 나타냅니다. 예를 들어, 사이드바나 광고 등이 해당된다.

- footer: 웹 페이지나 섹션의 바닥글을 나타낸다.

- h1~h6: 문서의 제목을 나타내며, h1이 가장 중요한 제목이고 h6이 가장 작은 제목이다.

- p: 문서나 섹션의 본문을 나타내며, 일반적으로 문장이나 단락으로 구성된다.

- ul, ol: 리스트를 나타내며, ul은 순서 없는 리스트를, ol은 순서 있는 리스트를 나타낸다.

- li: 리스트 아이템을 나타낸다.

- figure: 그림이나 삽화 등의 콘텐츠를 나타내며, 일반적으로 캡션과 함께 사용된다.

- figcaption: figure 요소의 캡션을 나타낸다.

- main: 웹 페이지에서 주요 콘텐츠를 나타낸다.

header, footer, nav, section, article, aside 등의 요소는 모두 role 속성을 사용하여 적절한 역할(role)을 부여할 수도 있다. 이를 통해 스크린 리더러가 요소의 역할을 더 잘 이해하고 처리할 수 있도록 한다.

## 또 다른 예시

CSS스타일을 명시하는 태그를 사용하기 보다 의미를 명시하는 태그를 사용한다.</br>

굵은 글씨를 의미하는 `<b>` 와 강한 전달을 의미하는 `<strong>`은 동일하게 굵은 글자를 나타낸다. 하지만 `<b>`는 스타일적인 의미이고 `<strong>`은 의미적으로 부각되는 의미이기 때문에 strong태그가 좀 더 시맨틱 마크업에 적합하다고 할 수 있다.
