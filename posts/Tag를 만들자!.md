---
title: Tag를 만들어 활용하기
description: 어떻게 구현해낼수 있을까에 대한 고민
date: "2023-02-22"
category: til
published: true
tags: ["기능구현", "blog만들기", "Next.js", "trouble-shooting"]
---

# 태그삽입

## 블로그의 태그들

비록 내 블로그는 아주 간단한 기능만 존재하지만, 다른 블로그를 참고하면서 태그 기능을 꼭 넣고싶었다. 이유라면 내가 다른사람의 블로그를 이용할 때, 태그를 자주 이용했기 때문이다. 해당 기능은 어떻게 구현할지 먼저 고민했다.

## 어떻게 구현하였는가?

### 첫번째 : 마크다운에 태그 입력하기

먼저 나의 마크다운의 data부분에 tags라는 키를 만들어 그 안에 여러개의 태그들을 직접 입력하도록 하였다.
지금 작성하는 글의 data는 아래와 같이 생겼다. </br>
![마크다운 data](https://user-images.githubusercontent.com/113874038/220707816-05e87902-c31f-4c0c-bca2-fd78526ffbf2.png) </br>

이렇게 내가 달고 싶은 태그를 배열 형태로 작성해두었다. 이전 나의 gray-matter를 이용한 마크다운 변환에 관한 글에도 작성하였는데, gray-matter를 이용하면 위처럼 작성한 부분과 아래에 작성된 컨텐츠를 따로 받을 수 있다. </br>

### 두번째 : 태그를 모아서 메인 페이지에 입력하기

해당 태그들을 모으기 위해 함수를 하나 작성했다.

```javascript
//태그를 모두 가져오는 함수
export function getAllTags() {
  //tags는 가져온 모든 태그
  const tags = [];
  //filteredTags는 중복제거된 태그
  const filteredTags = [];

  //슬러그를 다 가져옴
  const slugs = getPostSlugs();
  //슬러그로 포스트의 태그들을 다 가져옴
  const Alltag = slugs.forEach((slug) => {
    const tag = getTagBySlug(slug);
    if (tag !== null) {
      tags.push(...tag);
    }
  });
  //배열안에 중복된 요소가 있는 경우 중복을 제거해주는 역할
  for (let i = 0; i < tags.length; i++) {
    if (!filteredTags.includes(tags[i])) {
      filteredTags.push(tags[i]);
    }
  }

  return filteredTags;
}
```

설명을 하면, 먼저 tags와 filteredTags를 먼저 선언해 두었다.</br>
다음 미리 작성해 두었던 나의 모든 포스트 이름을 가져오는 함수 getPostSlugs()를 통해 모든 파일명을 불러왔다.</br>
그리고 getTagBySlug()라는 포스트 이름을 가지고 태그를 가져오는 함수를 만들었다.

```javascript
export function getTagBySlug(slug) {
  //1~4줄 슬러그로 포스트 정보 가져오기
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  //여기서 데이터는
  const { data } = matter(fileContents);

  if (data.tags) {
    return data.tags;
  } else {
    return null;
  }
}
```

getTagBySlug()는 포스트 이름을 가지고 포스트의 정보를 가져온 후, 필요한 data 부분만 구조분해 할당으로 받은 뒤, 해당 파일에 tags가 존재하면 data.tags를 리턴해주는 함수이다. </br>

이어서 설명하면, 포스트 이름으로 가져온 태그들은 각각의 배열안에 담겨있기 때문에 바로 tags에 push하지 않고, 전개연산자로 배열을 풀어서 push하였다. </br>

만약 전개연산자를 사용하지 않는다면 `[[apple,samsung],[apple],[LG,samsung]]` 이렇게 배열안에 배열 형태로 tags가 만들어졌을 것이다. </br>

이제 마지막으로 중복된 태그들을 모두 지워야 했다. 그렇지 않으면 태그를 보여주는 태그리스트에서 같은 태그가 여러번 보일수 있기 때문이다. </br>

나는 배열안에 중복된 요소를 제거하기 위해 반복문과 include()를 사용하였다. 먼저 미리 선언해두었던 filteredTags는 처음 빈배열이다. 따라서 해당 배열 안에 tags의 요소가 있는지 검사하여, 없으면 해당 tag를 push하는 것이다. 만약 filteredTags안에 해당 tag가 존재한다면 if문에 걸리므로 push되지 않는다. </br>

이렇게 필터링된 태그를 얻을 수 있었다. 메인페이지에서 이 함수를 이용하여 태그모음을 만들었다.
![태그리스트](https://user-images.githubusercontent.com/113874038/220714523-7ec08056-40fe-47fb-ab55-64196ff3874b.png)

### 세번째 : 태그로 태그리스트 만들기

이제 태그들을 모아놨으니 태그를 클릭하면 해당 태그가 존재하는 글들을 불러와야 한다. 먼저 간략히 내가 생각한 방법은 태그를 클릭하면 라우팅을 걸어서 경로 끝에 태그가 존재하도록 하고, 그 경로의 페이지에서 params로 태그를 다시 받고, 해당 태그가 존재하는 포스트들을 뽑아오는 것이다. </br>

```javascript
export function getPostsByTag(tag, fields) {
  const allPosts = getAllPosts(fields);

  //해당 태그가 있는 포스트만 필터링하는 함수
  const filteredByTagPosts = allPosts.filter((post) => {
    //tags라는 key를 가지면서 해당 tag가 존재하는 포스트만 필터링
    return Object.keys(post).includes("tags") && post.tags.includes(tag);
  });

  return filteredByTagPosts;
}
```

위 함수가 바로 그 기능을 하는 함수이다. 태그와 필드값을 입력받으면, 먼저 필드값을 통해 모든 포스트를 불러오고 그 중에서 Object키로 tags가 존재하면서 tags안에 입력받은 tag가 존재하는 포스트만 필터링 하면 된다. 그리고 난 후 props를 통해 전달하고, 미리 만들었던 PostList컴포넌트를 이용하여 쉽게 리스트를 만들었다. 아래 사진은 태그로 불러온 포스트 리스트 이다.

![완성된 태그로 불러온 포스트 리스트](https://user-images.githubusercontent.com/113874038/220720274-20eba584-efc8-4c3c-9af0-eb82b90a590f.png)
