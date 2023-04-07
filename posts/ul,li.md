---
title: li와 ul
description: li가 ul의 자식어야아만 하는 이유
date: "2023-04-07"
category: htmlcss
published: true
tags: ["li", "ul"]
---

# <li> 와 <ul>

li는 아이템의 리스트를 의미한다. li의 부모요소가 ol,ul일 경우 li는 부모요소의 아이템리스트로 간주된다. 만약 부모 요소가 따로 존재하지 않는 경우, li는 개별적 요소가 되어버린다.

</br>

## 예시

```javascript
<ul>
  <li>항목 1</li>
  <li>항목 2</li>
  <li>항목 3</li>
</ul>
```

이 코드는 세개의 li로 구성되어 있고 ul은 li를 컨테이너로 감싸며 li가 목록의 일부라는 것을 나타내게 된다. 따라서 li를 따로 쓰지 않고 ul이나 ol과 함께 쓰여야 *시맨틱 마크업*이 되는 것이다.

## ul과 ol

ul은 순서가 없는 목록을 나타낼 때 사용하고, ol은 순서가 있는 목록을 나타낼 때 사용한다.
