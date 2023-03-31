---
title: HTTP
description: http와 메세지 구조
date: "2023-03-30"
category: network
published: true
tags: ["network", "http"]
---

# HTTP

## HTTP 란?

HTTP(Hypertext Transfer Protocol)는 인터넷에서 데이터를 전송하는데 사용되는 프로토콜이다. HTTP는 웹 브라우저와 웹 서버간의 통신을 할 때 주로 사용된다. HTTP는 클라이언트-서버 모델을 따르며, 클라이언트에서 요청을 보내면 서버에서 응답을 보낸다.

## HTTP메세지

HTTP 메세지는 요청 메세지와 응답 메세지로 나뉘며, 각각 메세지 헤더와 메세지 바디로 구성된다. 요청 메세지는 클라이언트에서 서버로 보내는 메세지고, 응답 메세지는 서버에서 클라이언트로 보내는 메세지이다.
</br>

HTTP의 요청과 응답 메세지는 기본적으로 아래와 같은 구조를 가지고 있지만 세부적으로 다른점이 존재한다.
![http](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F48K5Q%2FbtrzEAGXwPY%2FCqZn828LgoUVvu5iEU3NOk%2Fimg.png)
(출처 : https://jangjjolkit.tistory.com/13 )

## HTTP 요청 메세지

### Start Line

HTTP 메소드, Request target, HTTP version 이 있다.

- HTTP 메소드 : 요청의 의도를 담고있는 메소드로, GET, POST, PUT, DELETE 등이 있다.
- Request Target : 요청이 전송되는 목표 주소이다.
- HTTP version : 버전에 따라 요청 메세지 구조나 데이터가 다를 수 있기에 버전을 명시한다.

### Header

HTTP Request 자체에 대한 정보를 key : value 형태로 담고 있다.
</br>

Header의 경우 Request, Response 각각이 쓰는 항목 외에 공통 항목이 있지만, 우선 Request Header에 담긴 정보만 살펴보자.

- Host : 요청하려는 서버 호스트 이름과 포트 번호
- User-agent : 클라이언트 프로그램 정보로 이 정보를 통해 서버는 클라이언트 프로그램(브라우저, 기기 등)에 맞는 최적의 데이터를 보낼 수 있다.
- Referrer : 바로 직전에 머물렀던 웹 링크 주소이다.
- Accept : 클라이언트가 처리 가능한 미디어 타입 종류를 나열한다.
- If-Modified-Since : 이 시간 이후로 변경된 리소스를 취득하고 페이지가 수정되었으면 최신 페이지로 교체한다.
- Authorization : 인증 토큰을 서버로 보낼 때 쓰이는 항목이다.
- Origin : 서버로 POST 요청을 보낼 때 요청이 어느 주소에서 시작되었는지 나타내는 값으로, 요청을 보낸 주소와 받는 주소가 다르다면 CORS(Cross-Origin Resource Sharing)에러가 발생한다.
- Cookie : 쿠키 값이 key : value 형태로 표현된다.

### Body

HTTP Request가 전송하는 데이터를 담고 있는 부분이다. 전송하는 데이터가 없다면 비어있을 수 있다.
</br>

HTTP Request의 Body는 메시지 본문에 담긴 데이터를 나타낸다. Body는 모든 요청에서 선택 사항이며, 데이터가 전송되는 경우에만 사용된다. Body의 내용은 Content-Type 헤더를 통해 명시된다. 가장 일반적인 Content-Type 종류는 다음과 같다.

- application/x-www-form-urlencoded : URL 인코딩된 폼 데이터. 예를 들어, 검색 결과를 서버에 전송하거나 로그인 정보를 제출하는 데 사용된다.
- multipart/form-data : 파일 업로드와 같은 다중 데이터를 전송할 때 사용된다.
- application/json : JSON 데이터를 전송할 때 사용된다.
- text/xml : XML 데이터를 전송할 때 사용된다.

HTTP Request의 Body에 전송되는 데이터는 각각의 Content-Type에 맞게 구조화되어야 한다. 이것은 서버 측에서 요청을 처리할 수 있도록 해주는 중요한 요소이다.

## HTTP 응답 메세지

### Start Line

HTTP version, Status Code, Status Text가 있다.

- Status Code : 응답 상태를 나타내는 코드이다.
- Status Text : 응답 상태를 간략하게 글로 설명한다.

### Header

- Location : 상태코드 301, 302일 때만 볼 수 있는 항목으로, 서버의 응답이 다른 곳에 있다고 알려주면서 해당 위치(URI)를 지정한다.
- Server : 웹 서버의 종류를 알려준다.
- Age : max-age 시간 내에서 얼마나 흘렀는지 초 단위로 알려준다.
- Referrer-policy : 서버 referrer 정책을 알려주는 값이다.
- WWW-Authentication : 사용자 인증이 필요한 자원을 요구할 시, 서버가 제공하는 인증 방식이다.
- Proxy-Authentication : 요청한 서버가 프록시 서버인 경우 유저 인증을 위한 값이다.

### Body

HTTP Request메세지의 Body와 동일하다.

---

## 공통 Header

- Date : 현재 시간
- Cache-Control : 캐시 제어
  - no-store : 캐시를 저장하지 않음
  - no-cache : 모든 캐시를 쓰기 전에 서버에 해당 캐시를 사용해도 되는지 확인
  - must-revalidate : 만료된 캐시만 서버에 확인
  - public : 공유 캐시에 저장 가능
  - private : 브라우저같은 특정 사용자 환경에만 저장
  - max-age : 캐시의 유효기간 명시
- Transfer-Encoding : Body 내용 자체 압축 방식을 지정
- Content-Encoding : Body의 리소스 압축 방식 (Transfer-Encoding은 Body 자체이므로 다름)
- Content-Type : Body의 미디어 타입 ex) application/json, text/html
- Content-Length : Body의 길이
- Content-Language : Body를 이해하는데 가장 적절한 언어 ex) ko
- Connection : 클라이언트와 서버의 연결 방식 설정 항목으로, HTTP/1.;1은 keep-alive로 연결 유지하는게 default

---

출처 : https://jangjjolkit.tistory.com/13
