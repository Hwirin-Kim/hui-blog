---
title: Next.js 동적라우팅과 useRouter
description: 동적 라우팅과 useRouter알아보기
date: "2023-02-15"
category: nextjs
published: true
tags: ["Next.js", "동적라우팅", "useRouter"]
---

![pages 하위 폴더](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOjkfW%2FbtrZbq0kf5n%2Fo0KNFFKKHEbuolNofYHhKK%2Fimg.png)

#### 사진 : pages 하위 폴더들

## Next js는 기본적으로 폴더/파일 기반 라우팅이 적용된다.

따라서 pages아래에 있는 index.tsx(or index.js)파일이 기본 페이지가 된다. </br>

그러므로 pages 아래에 있는 index.tsx파일을 보고싶으면 localhost:3000 만 입력하면 된다. </br>

## 만약 다른 페이지로 라우팅을 하고 싶다면?

### 파일을 생성해서 만들기

예시로 pages폴더 하위에 about.tsx라는 파일을 만든다. </br>

![about.tsx](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcERr4T%2FbtrZbOzPE8e%2F1eblakQppQPzEz7XpzRFK1%2Fimg.png)

#### 사진 : pages 바로 아래 생성된 about.tsx

이렇게 파일을 생성해두면 localhost:3000/about 으로 라우팅이 가능하다.
</br>
이처럼 파일명에 따라 라우팅을 할 수 있다.

### 폴더이름으로 라우팅 하기

파일을 직접 만들지 않고, 폴더를 생성 후 폴더 하위에 index.tsx파일을 만드는 방법이 있다.

![pages/about/index.tsx](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuNZvf%2FbtrZa26rleR%2FHnconz0k4hfCQdjsK9Gk90%2Fimg.png)

#### 사진 : pages/about/index.tsx 으로 만든 파일

이 경우 또한 첫 번째 방법과 동일하게 localhost:3000/about 으로 라우팅이 가능하다.

---

## 동적 라우팅에 대해 알아보자

폴더 혹은 파일명을 대괄호로 감싸두면 동적 라우팅이 가능하다.

![pages/client/[id]](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FedFMQI%2FbtrZboBrpvC%2FvWUrZmP4FYLvF6kyjK6NE1%2Fimg.png)

나는 pages/clients 하위에 \[id\]라는 폴더를 만들었다. 이렇게 되면 어떤 일이 생길까? </br>

먼저 localhost:3000/clients로 들어간다면 clients바로 아래 index.tsx가 켜질것이다. </br>

하지만 여기서 localhost:3000/아무거나   처럼 아무거나를 입력하면 \[id\]하위에 있는 index.tsx가 열리게 된다. </br>

폴더 자체가 동적 라우팅을 지원하는 것이다.</br>

그렇다면 \[id\]폴더 하위에 동적 라우팅 파일을 하나 더 만든다면 어떻게 될까?
</br>
예상 하듯 localhost:3000/아무거나/아무거나  를 입력하여 갈 수 있는 페이지를 생성한다.
</br>

---

## useRouter 사용하기

일단 해당 라우팅 페이지에서 useRouter를 import한다.

```javascript
import { useRouter } from "next/router";
```

![[clientproject].tsx](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F7lFBF%2FbtrZauoCDv9%2FJKGkhn7cJFSP0FJR354sJk%2Fimg.png)

#### 사진 : [clientproject].tsx

나는 \[clientproject\].tsx파일에서 해당 정보를 받아올 것이다. </br>

router라는 변수에 useRouter()를 넣고, 콘솔에 router.query를 찍어볼 것이다. </br>

이 파일은 pages/clients/\[id\]/\[clientproject\].tsx 의 경로를 가진다.</br>

따라서 접속 방법은 </br>

localhost:3000/clients/아무거나/입력함</br>

이렇게 입력하여 접속 가능할 것이다. </br>

![console](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FSJj6N%2FbtrZa2k4OM3%2F8k8s87ae3ASdOuaOkaiKT0%2Fimg.png)

#### 사진 : 동적 라우팅을 입력 후 router.query로 경로 받아옴

router.query는 id폴더의 동적 라우팅으로 받은 '아무거나' 가 있고, clientproject 파일로 동적 라우팅 받은 '입력함' 이 존재한다. </br>

이렇듯 쿼리로 받아온 데이터들을 잘 이용하면 내가 원하는 값을 동적라우팅하고 router.query로 받아와서 서버에 데이터 요청을 하면 매우 유용하게 사용할 수 있을것 같다.
