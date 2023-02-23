---
title: gray-matter 사용하기
description: 마크다운파일을 html로 읽기
date: "2023-02-16"
category: til
published: true
tags: ["gray-matter", "blog만들기", "Next.js"]
---

# 블로그에 글을 써보자

## 마크다운을 이용한 블로그 포스팅

나는 블로그 글을 마크다운을 이용하여 작성하기로 했다. 마크다운으로 작성한다면, 내가 작성한 글을 보여줄 페이지도 마크다운을 html로 잘 바꿔서 보여주어야 한다. </br>

나는 gray-matter라는 라이브러리를 이용하여 마크다운을 파싱하고 html로 변경하였다.
먼저 내가 계획한 방법은 다음과 같다. </br>

- 1.fs모듈로 불러온 마크다운 리스트를 각각 포스트 카드에 담아서 포스트 리스트를 만든다.
- 2.각각의 포스트 카드를 클릭하면 각 포스트에 해당하는 파일제목으로 경로를 이동한다.
- 3.해당 경로의 페이지에서 slug를 prams로 받아 해당하는 포스트를 불러오는 함수에 넘긴다.
- 4.해당 함수로 불러온 포스트는 마크다운이므로 html로 변환 후 props로 넘긴다.
- 5.html을 보여줄 곳에 잘 위치시킨다.

그 중 4번에 해당하는 글을 작성하고 있는 것이다.
![작성한 마크다운 파일](https://user-images.githubusercontent.com/113874038/220699239-9f1a71e7-3b40-4c4d-9006-52b6cb31f292.png)
나는 이렇게 예시를 작성하였다.</br>

```javascript
//fileContents는 마크다운 파일을 불러온 것이다. (두번째 인코딩 옵션을 꼭 넣어야함)
const fileContents = fs.readFileSync(fullPath, "utf8");

//matter함수를 이용해 해당 부분을 데이터와 컨텐트 부분으로 구조분해할당 했다.
const { data, content } = matter(fileContents);
```

나는 위처럼 작성하여 데이터와 컨텐트를 구조분해 할당으로 받았다. 그 이유는 fileContents를 콘솔로 찍어보면 내가 원하는 자료는 data 와 content이기 때문이다.</br>
![콘솔로그](https://user-images.githubusercontent.com/113874038/220699332-eebcb50f-af94-4e01-ba01-88dc12d4e858.png)
