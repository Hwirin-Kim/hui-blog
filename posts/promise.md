---
title: Promise란 무엇인가?
description: Javascript의 promise
date: "2023-01-04"
category: javascript
published: true
tags: ["Javascript", "Promise"]
---

# Promise란?

프로미스는 자바스크립트 비동기처리에 사용되는 객체이다. </br>

자바스크립트에서 비동기 처리를 하려면 콜백함수를 사용해야 한다. 하지만 이를 너무 남용하게 되면 콜백지옥에 빠지게 되고 이는 가독성이 나쁠 뿐 아니라 코드를 수정하기도 매우 힘들다. </br>

이러한 단점을 보완하여 비동기처리에 사용되는 객체 Promise가 탄생하게 되었다.</br>

프로미스는 _상황에 따른 상태_ 정보가 다르다.</br>

처음 비동기 처리가 수행중일때 _pending_ 상태이며 비동기 처리가 완료되면 결과에 따라 _fulfilled_ 혹은 *rejected*가 된다. </br>

프로미스는 생성하는 생성자와 소비하는 소비자로 나눠 볼 수 있다. </br>

## 1. Producer 생성자

```javascript
const promise = new Promise((resolve, reject) => {
  //무거운 일을 처리하는 함수를 여기에 쓴다.(여기선 setTimeout함수를 예시로 사용)

  //이렇게 사용하게 되면 executor콜백함수는 바로 실행됨

  setTimeout(() => {
    resolve("성공했당");
  }, 2000);

  //위는 2초나 걸리는 무거운 함수이고 처리에 성공하면 성공했당을 반환함
});
```

## 2. Consumers: then, catch, finally   소비자

```javascript
promise.then((value) => {
  console.log(value);
});
//이 경우 2초뒤에 성공된 성공했당을 반환함
```

만약 resolve대신 rejected에 의해 에러가 발생된 함수가 실행되었다면 catch로 에러를 잡아야 한다.

```javascript
promise

  .then(value=>{console.log(value)}

  .catch(error=>{console.log(error)}
```

이런식으로 성공한 값과 실패한 에러를 원하는 방식으로 처리해주면 된다. </br>

`.finally()`도 있는데 이는 성공실패와 상관 없이 마지막에 한번 더 실행해주고 싶은 함수가 있을 때 사용한다. </br>

파이널리를 사용하게 되면 성공이나 실패가 먼저 실행 된 뒤 마지막에 파이널리가 한번 실행된다. </br>

## 프로미스를 사용하면 좋은점

- 비동기 처리 시점을 명확하게 표현할 수 있다.

- 연속된 비동기 처리 작업을 수정, 삭제, 추가하기 편하고 유연하다.

- 비동기 작업 상태를 쉽게 확인할 수 있다.

- 코드의 유지보수성이 높아진다.
