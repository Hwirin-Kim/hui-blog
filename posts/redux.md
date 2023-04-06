---
title: Redux
description: 다른 상태관리 도구와 비교설명
date: "2023-04-06"
category: react
published: true
tags: ["redux", "recoil"]
---

# 리액트의 상태(state)

리액트에서 상태(state)는 컴포넌트의 데이터를 저장하는 객체이다. 상태는 컴포넌트 내에서 변경 가능하며, 변경 시 해당 컴포넌트가 리렌더링 된다.
</br>

함수형 컴포넌트에서 상태는 보통 useState훅을 사용하여 상태를 정의하고 setState를 통해서 상태를 업데이트 한다. 하지만 이는 컴포넌트 내에서만 가능하다.

## Redux

리덕스는 전역 상태관리를 위한 도구이다. 애플리케이션 전체에 대한 중앙 저장소 역할을 맡는다. 리덕스는 상태를 중앙 집중식으로 관리하며 액션(Action)을 통해 변경하고, 리듀서(Reducer)를 통해 이전 상태와 액션을 받아 새로운 상태를 정의한다. 이후에 미들웨어(Middleware)를 사용하여 비동기 작업을 처리하거나 리액트와 연결하여 컴포넌트에 상태를 전달한다.

### 리덕스의 흐름

![리덕스](https://blog.kakaocdn.net/dn/s633R/btrfXHylm9F/NFGdvLG9kaU486rL3dK3H1/img.gif)

- #1. View에서 action이 발생하면 dispatch를 통해 전달된다.
- #2. action에 의한 reducer함수가 실행되기 전에 middleware가 작동한다.
- #3. middleware에서 명령내린 일을 수행하고 난 뒤, reducer 함수를 실행한다.
- #4. reducer의 실행결과로 store에 새로운 값을 저장한다.
- #5. store의 state에 subscribe하고 있던 UI에게 변경된 값을 준다.

### 리덕스 사용 예시

사용 예시를 위해 간단한 투두리스트를 관리하는 리덕스를 구현해보자. </br>

#1. 리듀서 생성</br>

```javascript
//액션 생성 함수
const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";
const DONE_TODO = "DONE_TODO";

//액션 함수
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const delTodo = (payload) => {
  return {
    type: DEL_TODO,
    payload,
  };
};

export const doneTodo = (payload) => {
  return {
    type: DONE_TODO,
    payload,
  };
};

//초기값
const initialState = { todos: [] };
// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case DEL_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };
    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload
            ? { ...todo, isDone: !todo.isDone }
            : { ...todo };
        }),
      };

    default:
      return state;
  }
};
export default todos;
```

#2. 스토어 생성</br>

```javascript
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

const rootReducer = combineReducers({ todos: todos });
const store = createStore(rootReducer);

export default store;
```

combineReducers는 여러개의 리듀서를 하나로 합치는 것이다. 그리고 createStore는 리덕스 스토어를 생성하며 스토어를 만들 때 첫번째 매개변수로 리듀서를 전달해야한다. 따라서 rootReducer로 합쳐진 리듀서를 전달하면 된다.

#3. Provider </br>

Provider는 리덕스에서 제공하는 컴포넌트로 리덕스 스토어를 리액트 앱에 연결하기 위한 역할이다.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/config/configStore";
import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {" "}
    // 하위 컴포넌트에 스토어 전달
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
```

#4. 액션발생 </br>

Form컴포넌트를 만들어서 투두리스트를 추가하는 예시를 들어보자

```javascript
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";

export default function Form() {
  const dispatch = useDispatch();
  const initialState = {
    id: undefined,
    title: "",
    content: "",
    isDone: false,
  };
  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const addButton = () => {
    dispatch(addTodo({ ...todo, id: number }));
    number = number + 1;
    setTodo(initialState);
  };
  return (
   // 이곳에 JSX 내용 삽입...
  )
}
```

여기서 dispatch로 액션함수를 전달한다. </br>

그리고 사용할 곳에서 스토어의 상태를 받아와서 사용하면된다.</br>

#5. 전역상태 사용하기</br>

여기서는 List컴포넌트에서 전역상태로 만들어진 todos를 받아오는 예시를 만들어 본다.

```javascript
export default function List() {
    const updateTodos = useSelector((state) => {
    return state.todos.todos;
  });
return (
    // 이곳에 JSX 내용삽입.. 아마도 updateTodos를 map돌릴듯...
)
}

```

## Redux vs Recoil

### Recoil

리코일은 페이스북에서 만든 context API기반으로 구성된 함수형 컴포넌트에서만 사용 가능한 상태관리 라이브러리 이다.

### Recoil의 특성 (Redux와 차이점)

- #1. 배우기 쉽다. (복잡한 보일러 플레이트가 없다.)
  - 기존 React 내장 Hooks의 사용법과 유사하여 배우기 쉽다.
  - Recoil은 애플리케이션을 RecoilRoot로 감싸고 데이터를 atom이라는 단위로 선언하여 useState대신 useRecoilState로 사용한다.
  - atom : 작은 단위로 컴포넌트들이 구독할 수 있는 단위
  - selector : 동기/비동기적 상태를 변환
- #2. 비동기 데이터 흐름을 위한 내장 솔루션을 제공한다.
  - 리덕스는 비동기 처리 라이브러리에 따로 의존

### 플로우 차이

리덕스는 단방향 데이터 플로우 방식을 따른다. 즉 사용자 액션이나 이벤트가 발생하면 그에 대한 액션 객체를 생성하고, 리덕스 스토어에 전달하여 액션을 처리하는 리듀서 함수가 호출된다. 그리고 리듀서 함수는 이전 상태와 액션객체를 기반으로 로운 상태를 계산하고, 계산된 상태를 스토어에 업데이트 한다. </br>

반면 리코일은 컴포넌트 단위로 상태를 관리하며, 어느 컴포넌트에서든지 상태를 변경할 수 있다. 이를 위해 리코일은 atom이라는 개념을 사용하여 컴포넌트 간 공유할 수 있는 상태를 정의하고, selector를 사용하여 상태를 조회하거나 조합할 수 있다. atom은 변경 가능한 상태를 나타내며, selector는 atom이나 다른 selector의 값을 기반으로 계산된 값이나 파생된 상태를 나타낸다. </br>
![리코일플로우](https://velog.velcdn.com/images%2Fpika%2Fpost%2Fad9e3f59-391b-4aa7-815b-66920872860c%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-18%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.49.37.png)
사진 : 리코일 플로우 </br>

리코일의 Atom은 리덕스의 스토어와 유사하고, Selector는 리덕스의 리듀서와 비슷한 역할을 한다. 하지만 리코일은 Selector에 대한 의존성 추적과 같은 고급 기능을 제공하여 상태 관리를 더욱 쉽게 할 수 있다.
