---
title: this
description: Javascript의 this
date: "2023-03-31"
category: javascript
published: true
tags: ["this"]
---

# this란?

this 는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수(self referencing variable)이다. </br>

this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.

## this 바인딩

this 바인딩(this에 바인딩 될 값)은 함수 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.
</br>

일반적으로 함수를 호출하는 방법은 다음과 같다.

- 일반 함수 호출
- 메소드 호출
- 생성자 함수 호출
- Function.prototype.apply/call/bind

---

## 일반 함수 호출

기본적으로 this에는 전역 객체가 바인딩 된다.

```javascript
function foo() {
  console.log("foo's this : ", this); //window
  function bar() {
    console.log("bar's this : ", this); //window
  }
  bar();
}
foo();
```

위처럼 일반 함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩 된다. this는 객체의 프로퍼티나 메서드를 참조하기 위해 사용하는 용도인데, 일반함수는 객체를 생성하지 않으므로 큰 의미가 없다.

```javascript
let value = 1;
const obj = {
  value: 100,
  foo() {
    console.log("foo's this : ", this); //{ value: 100, foo: [Function: foo] }
    console.log("foo's this.value : ", this.value); //100
    function bar() {
      console.log("bar's this : ", this); //window
      console.log("bar's this.value : ", this.value); //undefined
    }
    bar();
  },
};
obj.foo();
```

메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩함수 내부의 this에는 전역객체가 바인딩 된다.

\*\*메서드 내에서 정의한 중첩함수 bar도 일반함수로 호출되면 중첩함수 내부의 this는 전역객체가 바인딩 된다.

```javascript
let value = 1;
const obj = {
  value: 100,
  foo() {
    console.log("foo's this : ", this); //{ value: 100, foo: [Function: foo] }
    setTimeout(function () {
      console.log("callback's this : ", this); //window
    });
  },
};
obj.foo();
```

콜백함수가 일반 함수로 호출된다면 콜백 함수 내부의 this에도 전역객체가 바인딩 된다. 어떠한 함수라도 일반함수로 호출되면 this는 전역객체가 바인딩 된다.

 </br>

그렇다면 메서드 내부의 중첩함수나 콜백함수의 this에 메서드의 this를 바인딩 시키기 위해서는 어떻게 해야 할까?

```javascript
let value = 1;
const obj = {
  value: 100,
  foo() {
    const that = this;
    function bar() {
      console.log(that.value); //100
    }
    bar();
  },
};
obj.foo();
```

위처럼 this바인딩을 변수 that에 할당하여 콜백함수 내부에서 해당 that을 참조하면 된다.

---

## 메서드 호출

메서드 내부의 this에는 메서드를 호출한 객체, 즉 메서드를 호출할 때 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체가 바인드 된다. 주의할 사항은 메서드 내부의 this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩된다는 것이다.

```javascript
const person = {
  name: "휘린",
  getName() {
    return this.name;
  },
};
console.log(person.getName()); //휘린
```

위 예제의 getName 메서드는 person 객체의 메서드로 정의되어 있다. 메서드는 프로퍼티에 바인딩된 함수이다.
</br>

즉 person객체의 getName 프로퍼티가 가리키는 함수 객체는 person 객체에 포함된 것이 아니라 독립적으로 존재하는 별도의 객체이다. getName프로퍼티가 함수 객체를 가리키고 있을 뿐이다.
</br>

따라서 아래처럼 getName의 프로퍼티가 가리키는 함수 객체, 즉 getName 메서드는 다른 객체의 프로퍼티에 할당하는 것으로 다른 객체의 메서드가 될수도 있고 일반 변수에 할당하여 일반 함수로 호출될 수도 있다.

```javascript
const person = {
  name: "휘린",
  getName() {
    return this.name;
  },
};
console.log(person.getName()); //휘린

const anotherPerson = {
  name: "민수",
};
//getName메서드를 anotherPerson객체의 메서드로 할당
anotherPerson.getName = person.getName;

console.log(anotherPerson.getName()); //민수

//getName메서드를 변수에 할당
const 변수 = person.getName;

//getName메서드를 일반 함수로 호출
console.log(변수()); //undefined  : NodeJS환경에서는 undefined라고 나옴
```

프로토타입 메서드 내부에서 사용된 this도 일반 메서드와 마찬가지로 해당 메서드를 호출한 객체에 바인딩 된다.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person("창수");
console.log(me.getName()); //창수 ----- 1

Person.prototype.name = "영수";
console.log(Person.prototype.getName()); //영수 ----- 2
```

1번의 경우 getName 메서드를 호출한 객체는 me 이다. 따라서 getName 메서드 내부의 this는 me를 가리키며 this.name는 창수이다.
</br>

2번의 경우 getName 메서드를 호출한 객체는 Person.prototype이다. 따라서 Person.prototype도 객체이므로 직접 메서드를 호출할 수 있다. 따라서 getName 메서드 내부의 this는 Person.prototype을 가리키며 this.name은 영수가 된다.

---

## 생성자 함수 호출

생성자 함수 내부의 this에는 생성자 함수가 (미래에) 생성할 인스턴스가 바인딩된다.

```javascript
function Circle(radius) {
  //생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

//반지름이 5 인 Circle객체 생성
const circle5 = new Circle(5);

//반지름이 10 인 Circle객체 생성
const circle10 = new Circle(10);

console.log(circle5.getDiameter()); //10
console.log(circle10.getDiameter()); //20
```

생성자함수는 이름 그대로 객체(인스턴스) 를 생성하는 함수이다. 일반 함수와 동일하게 생성자 함수를 정의하고 new연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다. 만약 new연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수가 아니라 일반 함수로 동작한다.

---

## Function.prototype.apply/call/bind 메서드에 의한 간접 호출

apply, call, bind 메서드는 Function.prototype의 메서드 이다. 즉 이들 메서드는 모든 함수가 상속받아 사용 할 수 있다.

```javascript
function getThisBinding() {
  return this;
}

const thisArg = { a: 1 };

console.log(getThisBinding()); //window

//getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding함수의 this에 바인딩한다.
console.log(getThisBinding.apply(thisArg)); //{ a: 1 }
console.log(getThisBinding.call(thisArg)); //{ a: 1 }
```

위 예제는 호출할 함수, 즉 getThisBinding 함수에 인수를 전달하지 않는다. 아래에서 apply와 call을 비교해보자.

```javascript
function getThisBinding() {
  console.log(arguments);
  return this;
}

const thisArg = { a: 1 };

//getThisBinding함수를 호출하면서 인수로 전달한 객체를 getThisBinding함수의 this에 바인딩한다.
//apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달한다.
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
//[Arguments] { '0': 1, '1': 2, '2': 3 }
//{ a: 1 }

//call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
console.log(getThisBinding.call(thisArg, 1, 2, 3));
//[Arguments] { '0': 1, '1': 2, '2': 3 }
//{ a: 1 }
```

apply메서드는 호출할 함수의 인수를 배열로 묶어서 전달한다. call메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다. 이처럼 apply와 call 메서드는 호출할 함수에 인수를 전달하는 방식만 다를 뿐, this로 사용할 객체를 전달하면서 함수를 호출하는 것은 동일하다.

</br>

Function.prototype.bind 메서드는 apply와 call 메서드와 달리 함수를 호출하지 않는다. 다만 첫 번째 인수로 전달한 값으로 this 바인딩이 교체된 함수를 새롭게 생성해 반환한다.

```javascript
function getThisBinding() {
  return this;
}

const thisArg = { a: 1 };

//bind메서드는 첫번째 인수로 전달한 thisArg로 this 바인딩이 교체된 getThisBinding함수를
//새롭게 생성해 반환한다.
console.log(getThisBinding.bind(thisArg)); //[Function: bound getThisBinding]

//bind 메서드는 함수를 호출하지는 않으므로 명시적으로 호출해야 한다.
console.log(getThisBinding.bind(thisArg)()); //{ a: 1 }
```

---
