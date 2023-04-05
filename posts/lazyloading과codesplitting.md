---
title: lazy loading과 code splitting
description: 리액트 성능개선
date: "2023-01-12"
category: react
published: true
tags: ["lazy-loading", "code-splitting", "trouble-shooting"]
---

# Lazy loading

레이지 로딩은 *로딩을 바로 하지 않고 지연시켰다가 로딩을 나중에 해준다는 뜻*이다. 간단한 예로 한 페이지에 많은 양의 사진이 사용된다고 가정해보면, 처음 로드할 때 많은 양의 사진을 한 번에 로드를 하는 것은 서비스의 속도를 늦추는 요인이 되므로 뷰포트에 잡히는 사진들만 로드하는 것이다.

```javascript
  //화면에 보일때 보여줄 토글state
  const [showList, setShowList] = useState(false);

  //옵저버 스테이트
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  //옵저버에 감지되면 showList true로 상태변경 (이미지 Lazy loading)
  useEffect(() => {
    if (inView && !showList) {
      setShowList(true);
    }
  }, [inView, showList]);

   return (
    <Container>
      <ThemePic ref={ref} onClick={() => navigate(`/theme/${theme.id}`)}>
        {showList ? <img src={theme.themeImgUrl} alt="themePoster" /> : null}
      </ThemePic>
    </Container>
  );
};
```

_위 코드는 실제 내가 일탈프로젝트(방탈출 카페 및 테마소개 페이지)를 하면서 사용한 Lazy loading이다._ useInView라이브러리를 이용해 뷰포트에 해당 컴포넌트가 보이면 true가 되어서  해당 이미지를 보이도록 구현하였다. </br>

---

# Code Splitting

자바스크립트로 개발을 하고 배포하는 과정에서 빌드과정을 거치게 되는데, 이 과정에서 모든 파일을 하나로 합치게 된다. 간단한 프로젝트라면 영향이 적지만, 거대한 프로젝트라면 (그 프로젝트가 특히 SPA페이지라면) 길고 많은 자바스크립트 코드(.css, .html 도 마찬가지이다)가 탄생한다. 이 경우 인터넷 환경이 좋지 못한 곳에서는 거대한 소스코드들을 불러오는데 상당한 로딩시간을 갖게된다. 이를 개선하고자 당장 사용하는 부분만을 로딩하고, 현재 필요하지 않은 부분은 따로 분리시켜 나중에 로드함으로써 로딩시간을 개선하는 방법을 사용하는데 이를 코드스플리팅이라고 한다. </br>

코드 스플리팅에 사용되는 여러가지 방법을 살펴보자.

### 1. 코드 비동기 로딩

이 방식은 필요한 부분만 import함으로써 필요한 순간에 코드를 불러오게 한다. 즉 import를 함수형으로 사용하는 문법인데, dynamic import라고 부른다. </br>

사용방법은 import를 함수처럼 사용한다. 함수처럼 사용한 import 구문은 Promise를 반환한다. 따라서 페이지에서 필요에 의해 import를 제어하는 것이다.

### 2. React.Lazy, Suspense를 사용하는 방법

React.Lazy, Suspense는 리액트 v16.6 부터 추가된 기능이다. 기존 버전에서는 dynamic import를 통해 불러오고 컴포넌트를 state에 넣어서 구현했다고 한다.

- React.lazy
  - React.lazy는 컴포넌트를 렌더링 할 때, 비동기적으로 로딩하게 해주는 함수이며 다음과 같이 사용한다.

```javascript
React.lazy(() => Component);
```

- Suspense
  - Suspense는 코드 스플리팅되어 로딩되지 않은 컴포넌트를 로딩하게 만들어주는 컴포넌트이다. 또 옵션으로 로딩이 끝나지 않았을 때 보여주는 ui를 따로 구성할 수 있다. suspense는 다음과 같이 사용한다.

```javascript
import React, {Suspense} from 'react';

<Suspense fallback={fallback 코드}>
</Suspense>
```

fallback은 로딩중 일 때 보여줄 ui의 코드를 넣는 공간이다. suspense컴포넌트 사이에 로딩하고자 하는 컴포넌트를 삽입하면 된다.

### 3. Loadable components 라이브러리

이 라이브러리는 코드스플리팅을 편하게 도와주는 동시에 서버사이드렌더링을 가능하게 해준다. 리액트 공식문서에서도 서버사이드렌더링을 할 경우 이 라이브러리를 사용하도록 권고하고있다.</br>

사용법 자체는 React.lazy와 Suspense가 빠진 형태와 유사하다.</br>

Suspense컴포넌트의 fallback처럼 로딩중 보여주고 싶은 UI가 있다면 loadble을 다음과 같이 사용하면 된다.

```javascript
//변경 전
const SplitMe = loadable(() => import("./SplitMe"));

//변경 후
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>로딩중...</div>,
});
```
