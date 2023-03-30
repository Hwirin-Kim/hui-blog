---
title: position
description: position 사용법
date: "2023-03-30"
category: htmlcss
published: true
tags: ["CSS", "position"]
---

# position

position 속성은 웹 문서 안 요소들을 어떻게 배치할 지를 정하는 속성이다. position 속성을 이용하면 텍스트나 이미지를 원하는 위치로 배치할 수 있고 어떤 방식으로 놓을지를 결정할 수 있다. </br>

position 속성은 상속되지 않으며, 위(top), 아래(bottom), 좌(left), 우(right)의 위치를 같이 설정할 수 있다.

### static

default값으로 요소들이 겹치지 않고 상 ⇨ 하로 배치된다.

### relative

원래 배치되어야 할 위치에서 지정한 값 만큼 떨어진 곳에 요소를 배치한다. </br>

relative를 적용하는 것만으로 어느 위치로 이동 하는것이 아니라, top,bottom,left,right 프로퍼티가 있어야 원래 위치에서 이동할 수 있다.

```html
//html
<div>div</div>
<div class="relative">div.relative</div>
<div class="relative top-left">div.relative.top-left</div>
```

```css
//CSS
div {
  border: 3px blue solid;
  width: 100px;
  height: 100px;
}

div.relative {
  position: relative;
}

div.relative.top-left {
  left: 50px;
  top: 50px;
}
```

![결과물](https://velog.velcdn.com/images%2Fhoje15v%2Fpost%2F7bf71ba7-acc4-4b97-9cf8-260709cfa7d3%2Flayout.png)

### fixed

웹 브라우저 화면 전체를 기준으로 배치한다. 스크롤을 하더라도 위치가 고정된다.

### absolute

가장 가까운 상위 요소의 위치를 기준으로 지정한 값 만큼 떨어진 곳에 요소를 배치한다.
</br>

일반적으로 absolute를 쓰고싶은 요소가 있으면 기준이 될 부모 요소에게 position:relative를 부여하게 되면 부묘오소를 기준으로 배치할 수 있다.

```html
//html
<div class="relative">
  div.relative
  <p class="absolute">div.absolute</p>
</div>
```

```css
//CSS
div.relative {
  position: relative;
}

p.absolute {
  position: absolute;
  left: 50px;
  top: 50px;
  background-color: yellow;
}
```

![결과2](https://velog.velcdn.com/images%2Fhoje15v%2Fpost%2F2459fbad-9477-441f-a0e6-04cd5e0147d4%2Fabsolute.png)

### sticky

스크롤 위치가 임계점에 이르면 position: fixed와 같이 박스를 화면에 고정할 수 있는 속성으로 스크롤 영역 기준으로 배치한다. </br>

하지만 사용상 주의사항이 있다.

- 브라우저 호환성 확인 : position:sticky는 모든 브라우저에서 지원되는 것이 아니므로 브라우저 호환성을 확인해야 한다.
- z-index 지정 : 고정 요소가 다른 요소와 겹치는 경우 z-index속성을 사용하여 겹치는 요소의 순서를 지정해야 한다.
- 잦은 사용 금지 : 너무 자주 사용하게 되면 웹사이트의 성능에 영향을 줄 수 있다. 이 속성을 사용하여 요소를 자주 고정하면 스크롤 및 레이아웃 변경에 대한 성능 문제가 발생하기 때문이다.
- 너무 많은 요소 고정하지 않기 : 너무 많은 요소를 고정하면 지나치게 혼잡해 보일 수 있다.
- 높이 지정 : 고정 요소에 높이를 지정하는것이 좋다. 그렇지 않으면 다른 요소와 겹치거나, 레이아웃 문제가 발생할 수 있다.
- 모바일에서의 사용 : 모바일 장치에서는 작은 화면 크기로 인해 예상대로 작동하지 않을 수 있다. 따라서 이 속성을 사용할 땐 모바일 장치에서 테스트 해보는것이 좋다.
