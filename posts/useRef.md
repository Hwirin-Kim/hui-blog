---
title: useRef란?
description: useRef가 필요한 상황
date: "2023-04-04"
category: react
published: true
tags: ["useRef"]
---

# useRef 란?

useRef는 리액트 Hooks 중 하나로 함수형 컴포넌트에서도 ref를 사용할 수 있게 해준다. useRef를 사용하면 컴포넌트에서 일반 변수를 사용하는 것처럼 값을 저장하고, 변경할 수 있다.

## useRef가 필요한 상황

리액트에서 DOM요소를 직접 조작하거나 React 컴포넌트 내부에서 어떤 값이 변할 때 이전 값을 유지하고자 할 때 사용된다. 몇가지 예시를 살펴보자.

### DOM요소에 직접 접근

useRef는 리액트 컴포넌트에서 DOM요소에 직접적으로 접근할 수 있도록 한다. 예를 들어 특정 input 요소에 포커스를 주거나, 스크롤 위치를 조작할 때 사용된다.

### 이전 값 유지

리액트 컴포넌트 내부에서 상태가 변경되었을 때, 이전 값을 유지할 수 있다. 예를 들어 setInterval 함수를 사용하여 타이머를 생성하고, 이 타이머를 clearInterval 함수로 중지할 때, useRef를 사용할 수 있다.

### Focus관리

useRef를 사용하여 특정 요소에 포커스를 주거나 포커스를 관리할 때 사용된다.

### Class 컴포넌트에서 this대체

Class 컴포넌트에서 this키워드를 사용하는 대신 useRef를 사용하여 인스턴스 변수를 유지할 수 있다.

### Animations

애니메이션에 사용될 요소의 이전 값을 저장하고 새로운 값을 적용하는데 사용 된다.

### 과도한 렌더링 방지

onChange를 사용하여 특정 input의 값을 가져오는 경우, 매 입력마다 렌더링이 발생하게 된다. 해당 렌더링을 방지하고 싶다면 useRef로 input의 값을 받아서 바로 제출하도록 할 수 있다.

## useRef 간단 사용법

```javascript
import React, { useRef } from "react";

function Example() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}
```

위 예시는 useRef를 사용하여 inputRef 객체를 생성한다. 이 객체는 input요소의 ref속성에 할당되어 input요소에 대한 참조를 가져온다. current프로퍼티는 inputRef객체의 현재값을 가져온다.
