---
title: Cookie의 MaxAge,Expires
description: Cookie의 MaxAge,Expires는 무엇인가?
date: "2023-04-04"
category: network
published: true
tags: ["MaxAge", "Expires"]
---

# Cookie의 MaxAge,Expires

쿠키는 웹 사이트에서 사용자를 식별하고 상태를 유지하는데 사용되는 작은 텍스트 파일이다. 쿠키의 MaxAge,Expires옵션은 쿠키의 유효기간을 설정하는데 사용된다.

## MaxAge

MaxAge는 쿠키의 수명을 초 단위로 설정한다. </br>

예를들어 MaxAge=3600으로 설정하면 쿠키가 1시간 동안 유효하다. 이 옵션을 이용하면 브라우저가 닫히더라도 쿠키는 지속된다.

## Expires

Expires는 Cookie의 수명을 날짜/시간 형식으로 설정한다. </br>

예를들어 Expires=Wed, 21 Oct 2023 07:28:00 GMT 로 설정하면 쿠키가 해당 날짜와 시간에 만료된다. 이 옵션은 브라우저가 닫히더라도 쿠키를 지속시킬 수 있다.

## 결론

두 옵션은 서로 대체 가능하지만 MaxAge가 더 많이 사용된다. 초 단위로 정확한 유효기간을 설정할 수 있으며, Expires는 날짜/시간 형식으로 지정하기 때문에 일부 브라우저에서는 제대로 해석되지 않을 수 있기 때문이다.
