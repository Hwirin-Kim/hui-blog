---
title: CORS란 무엇인가?
description: CORS란? 그리고 해결방법은 무엇인가?
date: "2023-01-09"
category: network
published: true
tags: ["Network", "CORS"]
---

# CORS 란?

브라우저에서는 보안적인 이유로 cross origin HTTP 요청들을 제한한다. 그래서 cross-origin 요청을 하려면 서버의 동의가 필요하다. 서버가 동의하지 않는다면 브라우저에서 거절을 한다. 이러한 허락을 구하고 거절하는 메커니즘을 HTTP-header를 이용해서 가능한데 이를 CORS(cross-origin resource sharing)라고 부른다.

## cross-origin

다음중 한가지라도 다른경우를 일컫는 말이다.</br>

- 1\. 프로토콜 - http와 https는 프로토콜이 다르다

- 2\. 도메인 - 도메인 주소가 다른 경우

- 3\. 포트번호 - 8080과 3000처럼 포트번호가 다른경우

# CORS는 왜 필요한가?

CORS가 없이 모든곳에서 데이터를 요청하게 되면 다른 사이트에서 원래 사이트를 흉내낼 수 있게 된다. </br>

예를 들어서 기존 사이트와 완전히 동일하게 동작하도록 하여 사용자가 로그인을 하도록 만들고 그 과정에서 악의적으로 정보를 추출하거나 다른사람의 정보를 입력하는 등 공격을 할 수 있다. </br>

이렇게 공격을 할 수 없도록 브라우저에서 보호하고 필요한 경우에만 서버와 협의하여 요청할 수 있도록 하기 위해서 필요하다.

# CORS는 어떻게 동작하나?

## Simple requets 인 경우

- 1\. 서버로 요청을 한다.

- 2\. 서버의 응답이 왔을 때 브라우저가 요청한 Origin과 응답한 헤더 Access-Contron-Request-Headers의 값을 비교하여 유효한 요청이라면 리소스를 응답한다. 유효하지 않다면 브라우저에서 이를 막고 에러를 발생시킨다.

## preflight 요청일 경우

- 1\. Origin 헤더에 현재 요청하는 origin과 Access-Contron-Request-Headers헤더에 요청하는 HTTP method와 사용할 헤더를 Option메서드로 서버에 요청한다. 내용물은 없고 헤더만 전송한다.

- 2\. 브라우저가 서버에서 응답한 헤더를 보고 유효한 요청인지 확인한다. 유효하지 않으면 요청은 중단되고 에러를 일으키며 유효하다면 본래의 요청을 다시 보내 리소스를 응답받는다.

### preflight란?

simple requests가 아닌 cross-origin 요청은 모두 preflight 요청을 통해 실제 요청을 보내는 것이 안전한지 확인을 한다. 확인시 option메서드를 이용하여 cross-origin HTTP 요청을 보낸다.

# 해결방법

## proxy 설정

프록시서버를 설정하여 요청시 주소를 서버의 주소와 같게 바꾸어 요청을 보내도록 한다.

## 서버에서 Access-Control-Allow-Origin 세팅

서버에서 헤더에 Access-Control-Allow-Origin에 \*(모든경로 허용)을 입력하거나 프론트 로컬 주소로 설정한다.

---

### 도움을 받은 글

[https://hannut91.github.io/blogs/infra/cors](https://hannut91.github.io/blogs/infra/cors)

[https://tried.tistory.com/76](https://tried.tistory.com/76)

[Cors란 무엇인가?](https://tried.tistory.com/76)
