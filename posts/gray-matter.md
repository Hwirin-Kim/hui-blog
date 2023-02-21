---
title: gray-matter 사용하기
description: 마크다운파일을 html로 읽기
date: "2023-02-15"
category: nextjs
published: true
tags: ["gray-matter"]
---

[##_Image|kage@rcb6L/btrZrAazRFp/9D98kFwOf4p21uSRSV8lD0/img.png|CDM|1.3|{"originWidth":564,"originHeight":280,"style":"alignCenter","caption":"작성한 마크다운 파일","filename":"스크린샷 2023-02-16 오전 12.27.37.png"}_##]
​
위와 같은 마크다운 파일을 gray-matter를 이용하여 데이터를 분해하여 사용할 수 있다.
​
\*\*당연히 gray-matter를 설치하고 import해서 사용해야합니다.
​

```javascript
//fileContents는 마크다운 파일을 불러온 것이다. (두번째 인코딩 옵션을 꼭 넣어야함)
const fileContents = fs.readFileSync(fullPath, "utf8");
​
//matter함수를 이용해 해당 부분을 데이터와 컨텐트 부분으로 구조분해할당 했다.
const { data, content } = matter(fileContents);
```

​
나는 위처럼 사용하였다.
​
[##_Image|kage@lSDpL/btrZqGCBbt6/0C9708rk7usI0zWfA9LKd1/img.png|CDM|1.3|{"originWidth":631,"originHeight":199,"style":"alignCenter","caption":"console.log(matter(fileContents) 했을 때 터미널에 찍힌 데이터","filename":"스크린샷 2023-02-16 오전 12.30.45.png"}_##]
​
matter() 함수를 이용하여 나온 데이터는 위와 같고, 나는 컨텐트와 데이터 부분이 필요하기 때문에 해당 부분만 구조분해할당 하여 사용한 것이다.
