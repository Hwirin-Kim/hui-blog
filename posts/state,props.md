---
title: state와 props
description: state와 props는 무엇인가
date: "2023-04-05"
category: react
published: true
tags: ["state", "props"]
---

# state와 props

리액트에서 state와 props는 컴포넌트의 상태와 속성을 나타내는 객체이다.

## state

state는 컴포넌트 내부에서 관리되는 값으로, 컴포넌트의 상태를 나타내는 객체이다. state가 변경되면 컴포넌트는 리렌더링 된다. </br>

state는 setState함수를 통해 변경할 수 있다. 만약 state를 직접 변경하게 되면 리액트는 컴포넌트를 다시 렌더링 할 타이밍을 알지 못한다. 반드시 setState를 통해 값을 변경해야 한다.

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

### 객체나 배열 state의 주의할 점

만약 객체나 배열로 만들어진 state가 있다면 불변성을 유지하도록 setState해야한다.

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState({ count: 0, name: "카운트" });

  function increment() {
    setCount({ ...count, count: count.count + 1 });
  }

  return (
    <div>
      <p>
        {count.name}: {count.count}
      </p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

## props

props는 컴포넌트에 전달되는 속성값으로 읽기 전용이다. props는 부모 컴포넌트에서 자식 컴포넌트로 전달된다. 따라서 리액트에서 props를 통해 데이터의 불변성을 보장할 수 있다.
</br>

props는 객체 형태로 전달되며, 자식 컴포넌트에서는 props 객체의 속성을 이용하여 값을 참조할 수 있다. </br>

```javascript
function App() {
  const myInfo = {
    이름: "휘린",
    고향: "전주",
  };
  return <User userInfo={myInfo} />;
}

function User({ userInfo }) {
  console.log(userInfo);
  return (
    <>
      <p>이름 : {userInfo.이름}</p>
      <p>고향 : {userInfo.고향}</p>
    </>
  );
}

export default App;
```
