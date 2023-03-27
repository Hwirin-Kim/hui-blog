---
title: Restful API란?
description: get, post 등 메소드와 그 기준
date: "2023-03-27"
category: network
published: true
tags: ["network", "RestfulAPI"]
---

# REST API가 무엇일까?

## REST 란?

REST(Representational State Transfer)의 약자로 자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 모든것을 의미한다. </br>

간단히 설명하여

- HTTP URI(Uniform Resource Identifier)를 통해 자원을 명시하고
- HTTP Method(POST, GET, PUT, DELETE, PATCH 등) 을 통해
- 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미한다.

## REST API란?

REST API란 REST의 원리를 따르는 API를 의미한다. </br>

REST API는 클라이언트와 서버간의 통신을 위해 일반적으로 JSON 또는 XML 형식의 데이터를 주고 받으며, URL을 통해 자원을 식별하고 HTTP 메소드를 통해 해당 자원에 대한 CRUD작업을 수행한다.</br>

# RESTful API는 무엇일까?

RESTful API는 REST API를 따르는 웹 API의 한 형식이다. REST API를 설계하는 데 있어서 일관성과 가독성을 높이기 위한 규칙을 따른다. </br>

RESTful API는 다음과 같은 규칙을 따른다.

- #1. 자원을 URI로 표현하고 HTTP메소드를 이용하여 자원에 대한 CRUD 작업을 수행한다.
- #2. URI는 자원을 표현하고, 자원의 동작을 타나내는 동사는 사용하지 않는다.
- #3. 자원에 대한 조작은 HTTP 메소드로 표현한다.
- #4. 메시지는 HTTP 메시지 포맷을 이용한다. 대표적으로 JSON이나 XML형태의 데이터를 주고 받는다.
- #5. API버전을 URI에 포함시킨다.

RESTful API는 일관성 있는 URI구조와 HTTP메소드를 이용한 자원 조작 방식을 통해, 클라이언트와 서버간의 상호작용을 단순화하고, 가독성과 확정성을 높이는 장점이 있다. 또한, RESTful API는 다양한 클라이언트와 서버 사이에서 공통으로 사용될 수 있는 인터페이스를 제공함으로써, 분산 시스템에서 상호 운용성을 보장하는데 큰 도움을 준다.

---

### URI 표현 예시

- GET /users : 모든 사용자 정보 조회
- GET /users/{userId} : 특정 사용자 정보 조회
- POST /users : 새로운 사용자 정보 생성
- PUT /users/{userId} : 특정 사용자 정보 수정
- DELETE /users/{userId} : 특정 사용자 정보 삭제

위 예시에서 URI의 구성 요소는 다음과 같다.

- / : URI의 구분자
- users : 자원의 이름을 나타내는 경로 요소
- {userId} : 자원의 식별자를 나타내는 경로 변수

URI는 RESTful API에서 자원을 유일하게 식별하는 주소로 사용된다. 따라서 URI를 설계할때는 URI가 자원을 명확하게 식별할 수 있도록 일관성 있고 의미 있는 구조로 설계해야 한다.

---

# RESTful API가 아닌 예시

## SOAP API

SOAP(Simple Object Access Protocol) API는 RESTful API와 달리, XML 기반의 프로토콜을 사용해 데이터를 전송한다. </br>

SOAP API는 HTTP뿐만 아니라 TCP/IP, SMTP등 다양한 프로토콜을 지원하기도 한다. </br>

SOAP API에서는 데이터 전송을 위해 XML을 사용하며, XML내에서 SOAP 메시지 형식을 사용하여 데이터를 표현한다. SOAP API는 복잡한 데이터를 처리하기 위해 다양한 기능을 제공하기 때문에, RESTful API보다는 보안성이 높고 안정적이지만, 더 복잡하고 무겁다. </br>

예를들어 SOAP API에서는 데이터를 조회하기위해 HTTP GET메소드를 사용하는 것이 아니라 SOAP 메시지 내에서 별도의 메소드를 정의하여 데이터를 요청한다. 또한 SOAP API에서는 HTTP를 통해 전송되는 데이터가 암호화되어 있지 않아서 보안성이 떨어질 수 있다. </br>

### SOAP API vs RESTful API

요약하면 SOAP은 복잡한 기능을 제공하며, 보안성이 높지만 무겁고 느리다는 단점이 있고, RESTful API는 간단하고 빠르며 확장성이 높지만 보안성이 낮을 수 있다. 따라서 프로젝트 특성에 맞게 선택하여 사용하는 것이 좋다.

## RESTful 아키텍처를 따르지 않는 예시

사용자 정보를 관리하는 웹이 있다고 가정하고 해당 웹에서 사용자정보를 추가, 조회, 수정, 삭제 하는 기능을 수행하는 API를 작성해보자.

### RESTful 한 경우

사용자 정보 생성(Create)

- URL: /users
- HTTP 메서드: POST

사용자 정보 조회(Read)

- URL: /users/{id}
- HTTP 메서드: GET

사용자 정보 수정(Update)

- URL: /users/{id}
- HTTP 메서드: PUT

사용자 정보 삭제(Delete)

- URL: /users/{id}
- HTTP 메서드: DELETE

### RESTful 을 따르지 않는 경우

사용자 정보 생성(Create)

- URL: /add_user.php
- HTTP 메서드: GET 또는 POST

사용자 정보 조회(Read)

- URL: /view_user.php?id={id}
- HTTP 메서드: GET

사용자 정보 수정(Update)

- URL: /edit_user.php?id={id}
- HTTP 메서드: GET 또는 POST

사용자 정보 삭제(Delete)

- URL: /delete_user.php?id={id}
- HTTP 메서드: GET 또는 POST

</br>

이 경우에는 URI의 디자인이 일관성이 없어서 URI를 파싱하고 사용자 요청을 이해하고, 처리하는데 어려움이 있을 수 있다. 또한 HTTP메소드가 명확하지 않아서 서버가 예기치 않은 동작을 수행할 수도 있다. 이러한 이유로 RESTful 아키텍처를 따르는 것이 좋다.
