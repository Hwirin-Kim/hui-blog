---
title: CSS 길이단위
description: px, em, rem, vh, vw, % 단위들의 차이점
date: "2023-01-03"
category: htmlcss
published: true
tags: ["CSS", "길이단위", "px", "em", "rem", "vh", "vw"]
---

# CSS 길이단위

CSS에서 길이 단위는 크게 두 분류로 나눌 수 있다.

## 절대 길이 단위

### px

절대 길이 단위는 다른 요소들의 크기와 상관없이 항상 동일한 값으로 간주된다.</br>

px이 바로 고정된 값을 가지는 절대 길이 단위이다.

## 상대 길이 단위

em과 rem은 글꼴의 크기를 나타낼 때 사용하는 단위이다. 상위 요소의 글꼴 크기에 비례해서 변하는 em과 root 요소의 크기에 비례하는 rem이 있다.</br>

### em

ex) em : 상위 클래스의 font-size가 16px이고 자식 클래스에 2em을 지정하게 되면 해당 2em은 32px이 된다. 게다가 자식 클래스에 한번 더 하위 클래스를 만들어 손자 클래스를 지정하고 2em을 지정했다면 해당 2em은 64px이 된다.</br>

### rem

ex) rem : 상위 요소가 아닌 root가 되는 요소의 크기에 비례한다. root의 font-size가 16px이라면 그 자식과 손자가 각각 2rem이라면, 둘 다 32px이 되는 것이다.</br>

### vw, vh

vw와 vh (vertical height, vertical width) 또한 상대 길이 단위이다. 각각 뷰포트 크기의 1/100크기로 vw는 가로의 1/100, vh는 세로의 1/100을 말한다.</br>

ex) 브라우저의 높이가 500px인 경우 1vh = 5px 이고  너비가 500px인 경우 1vw = 5px 이다.</br>

### %

%는 부모엘리먼트 크기의 %를 의미한다. 부모 엘리먼트가 브라우저뷰포트 크기라면 vw, vh와 같겠지만 그렇지 않은 경우가 더욱 많다.
