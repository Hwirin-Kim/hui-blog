---
title: S3배포 후 access denied 문제 해결
description: 하위경로 새로고침시 문제
date: "2023-04-06"
category: til
published: true
tags: ["AWS", "access denied", "blog만들기", "trouble-shooting"]
---

# 발생한 문제

현재 이 블로그를 vercel에 배포하였을때는 해당 문제가 없었다. </br>

S3와 CloudFront를 이용하여 재배포 후 발생한 문제이다. 문제는 바로 메인 도메인을 제외한 하위 경로가 Access Denied가 되는 문제이다.

![오류사진1](https://user-images.githubusercontent.com/113874038/230426376-1f7cf78c-f83e-4c66-9658-f6cb96e52f9e.png)

메인으로 들어와서 하위 경로로 이동하는것은 문제가 없었으나,

- 하위 경로에서 새로고침을 하는 경우
- 하위 경로를 직접 들어가는 경우

위 두 경우에 Access Denied 문제가 발생하였다.

## 시도한 방법 1 (해결 X)

먼저 시도한 방법은 S3 버킷에 정적 웹 사이트 호스팅 편집 탭에 들어가서 오류 문서 발생시 리디렉션을 index.html로 보내주는 것이였다. </br>

![리디렉션](https://user-images.githubusercontent.com/113874038/230427418-0eb53648-bae5-4496-843d-c75913fa6bd5.png)

이렇게 하면 S3에서 부여해준 URL에서는 오류가 발생하지 않았지만 CloudFront에 연결된 도메인에서는 여전히 문제가 있어서 CloudFront에서도 동일한 작업을 수행해줬다. </br>

이렇게 하고 확인해보니 Access Denied가 발생하는 오류는 사라졌지만, 해당 경로로 이동하는 것이 아니라 메인 도메인으로 이동되었다. 당연하게도 오류 발생시 index.html로 이동하도록 설정했으니 당연했다.

## 시도한 방법 2 (반만 해결됨 🥲)

뭐가 문제인지 찾아보다가 구글에서 어떤 글을 보고 경로 끝에 .html을 붙이면 잘 이동 될것이다 라는 글을 보았다.

![경로에html붙이기](https://user-images.githubusercontent.com/113874038/230428106-2bf23245-5b40-402b-81b3-1a610b9faf38.png)

사실이였다. 아무래도 내가 정적페이지의 배포에 관한 지식이 없어서 해당 문제를 잘 해결하지 못한 것 같았다.</br>

위 문제는 서버가 존재하지 않아서 발생하는 문제라고 한다. (대충 이해는 했는데 정확하지 않아서 이 부분은 더 공부해 볼 생각이다.) </br>

그리고 현업 개발자 친구의 도움으로 Nest.JS 공식문서에 해결 방법이 있다는 것을 알게 되었다.

![공식문서](https://user-images.githubusercontent.com/113874038/230429526-6775a657-fcdc-44b7-ac0b-a73dffbe4821.png)

내용을 보면 Next.JS 9 이전 버전에는 모든 페이지의 URL 끝에 슬래시("/")를 추가하여 구성되었고 예를 들면

- /about 페이지가 있다면
- /about/ 으로 구성되었고
- Next.js는 이를 about/index.html 파일로 매핑했다는 의미이다.

현재 Next.js는 슬래시를 추가하지 않지만 이전 URL 구성방식을 이용하고 싶다면 next.config.js 파일에 trailingSlash: true 을 추가하라는 것이다.

![해결완료](https://user-images.githubusercontent.com/113874038/230430727-e6d873fe-82e9-4cb0-bc0e-94163b6c677c.png)

위 사진은 해결방법을 넣고 S3주소로 들어가서 주소 끝에 슬래시가 생기고, 해당 문제가 해결된 것을 확인한 사진이다. 그런데 이상하게도 CloudFront 도메인에서는 해결되지 않았다.</br>

S3에 페이지를 요청하고 해당 자료를 캐싱해두는 원리인줄만 알아서 S3가 해결되면 CloudFront도 같이 해결될줄알았는데... 이제 이 문제를 해결해봐야겠다.
