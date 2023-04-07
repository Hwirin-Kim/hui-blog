---
title: inline과 block
description: inline과 block의 차이점
date: "2023-04-07"
category: htmlcss
published: true
tags: ["inline", "block"]
---

# inline과 block

HTML에서 요소는 일반적으로 블록 또는 인라인으로 분류된다. 이 두 가지 유형은 요소가 문서의 레이아웃에서 어떻게 배치되는지 결정한다.

![인라인블록](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHJy2o%2FbtqBUAEWUuf%2FGSpy3eBAF2PEgmREkQaFe1%2Fimg.png)
출처 : https://abcdqbbq.tistory.com/5

## block

블록 요소는 새로운 줄에서 시작하고 해당 요소의 전후에 줄 바꿈을 만든다. 블록 요소는 일반적으로 컨텐츠의 구분을 나타내며, 페이지의 레이아웃을 형성하는데 사용된다. 블록 요소의 너비는 부모 요소의 너비를 모두 차지하며, 너비와 높이를 지정할 수 있다.

### block 예시

`<div>`, `<p>`, `<h1>`~`<h6>`, `<ul>`, `<ol>`, `<li>`, `<form>` 등이 있다.

## inline

인라인 요소는 새로운 줄에서 시작하지 않고, 해당 요소의 전후에 줄바꿈이 없다. 인라인 요소는 일반적으로 텍스트 내부에 사용되며, 해당 텍스트와 함께 라인 내부에서 배치된다. 인라인 요소의 너비와 높이는 내부 컨텐츠의 크기만큼 결정된다.

### inline 예시

`<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<input>` 등이 있다.

## 요약

블록요소는 새로운 줄에서 시작하고 전후에 줄 바꿈이 있으며, 인라인 요소는 줄 바꿈 없이 내부 텍스트와 함께 라인 내부에서 배치된다. 블록요소는 페이지 레이아웃의 구성을 위해 사용되고, 인라인 요소는 텍스트 스타일링과 하이퍼링크 등의 목적으로 사용된다.
