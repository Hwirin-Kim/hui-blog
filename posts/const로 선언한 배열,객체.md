---
title: const로 선언한 배열,객체
description: const로 선언했는데 어떻게 추가가 되나?
date: "2023-04-03"
category: javascript
published: true
tags: ["배열", "객체"]
---

# const로 선언한 배열과 객체

const는 자바스크립트에서 변수를 선언할 때 사용되는 예약어중 하나로 const로 변수를 선언하면 해당 변수는 수정이 불가능 하다. </br>

하지만 우리는 const로 배열이나 객체를 선언하면 추가가 잘 된다는 것을 알 수 있다. 그 이유를 알아보자

## 배열과 객체가 저장되는 원리

자바스크립트의 배열과 객체는 모두 자바스크립트의 객체이다. 따라서 배열과 객체는 내부적으로 동일한 방식으로 저장된다. 그럼 문자와 객체의 할당이 어떤 차이가 있는지 살펴보자

### 문자를 할당한 경우 (원시형 데이터)

변수 a에 문자 'abc'를 할당한 후 'bbb'로 재할당 하는 상황을 보자

```javascript
let a = "abc";
a = "bbb";
```

![변수a](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1y5gT%2FbtrWmmmxPtx%2FYK7iVWUfBSAwMpdlGXOv00%2Fimg.png)

식별자 a는 메모리에 값을 바로 할당하는 것이 아닌 abc라는 데이터가 존재하는 주소를 값으로 가지고 있다. 여기서 a='bbb'로 재할당을 하게 되면 어떻게 될까?

![변수a 재할당](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbKbzH%2FbtrWp0cbaD1%2FL9OooHR5MSaDDTwBJSKDB0%2Fimg.png)

a의 값을 변경하면 새로운 값 bbb가 존재하는 주소값으로 변경된다. 이는 자바스크립트의 원시 데이터들은 한번 만든 값을 바꿀 수 없는 특징인 불변성을 보여주는 예시이다. </br>

하지만 참조형 데이터들은 불변성이 아닌 가변성을 갖는다.

### 객체를 할당한 경우 (참조형 데이터)

```javascript
let obj = {
  a: 1,
  b: "abc",
};
```

위처럼 obj객체를 하나 만들었다. 그럼 메모리는 다음과 같은 구조를 가지게 된다.
![obj객체](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9eFIY%2FbtrWrqHLPq4%2FXU5A5cJCKNgl8SN9kF1ADk%2Fimg.png)

일단 메모리 구조를 설명하자면, obj식별자에는 b3030이라는 주소값이 할당되어 있고, b3030의 데이터에는 c1010~c2020의 주소값이 할당되어 있다.</br>

c1010과 c2020에는 obj내부 데이터가 각각 할당되어 있으며 이 역시 데이터의 주소값을 가지고 있다. c1010과 c2020에 있는 주소값을 따라가면 해당 데이터를 찾을 수 있다. </br>

만약 여기서 obj.a=3으로 재할당을 한다면 어떻게 될까? </br>
그렇다면 아마도 주소 b5050을 만들고 값 3을 할당한 뒤, c1010에서 가지고 있는 주소값을 b5050으로 바꾸게 될 것이다.

![재할당](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9GF7H%2FbtrWqIhRghx%2Fh4sfw86jWKTJysM6Jcfyyk%2Fimg.png)

위처럼 실제 obj의 메모리 값은 b3030으로 변한게 없지만, 데이터는 변하게 된 것이다.

### 결론

따라서 식별자 obj의 재할당은 불가능 하지만, obj가 참조하는 객체의 내용을 변경하는것은 가능하다.
