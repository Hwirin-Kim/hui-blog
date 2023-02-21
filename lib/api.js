import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

//포스트의 마크다운있는 폴더 경로 가져오기, process.cwd는 루트 폴더 경로이다.
const postsDirectory = join(process.cwd(), "/posts");

//마크다운 제목 가져오기 ex) [test.md, test2.md] 배열로 가져옴
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

//slug는 md파일의 파일명이다. test.md
export function getPostBySlug(slug, fields) {
  //realSlug는 확장자를 뺀 제목이다.  test  or test2
  const realSlug = slug.replace(/\.md$/, "");

  //fullPath는 총 경로이다. /Users/kimhwirin/Desktop/Blog/my-blog/posts/test.md
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  //두번째 변수로 인코딩옵션을 넣지 않으면 바이너리 데이터로 나옴
  const fileContents = fs.readFileSync(fullPath, "utf8");

  //매터함수로 마크다운을 파싱하여 데이터부분, 컨텐트 부분으로 구조분해할당함
  const { data, content } = matter(fileContents);

  const items = {};

  //필요한 데이터 뽑아쓰기, field 배열로 받은 데이터를 forEach로 각 조건에 맞는 데이터 뽑기
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields) {
  //slugs = [test.md, test2.md]
  const slugs = getPostSlugs();

  //posts = [test.md, test2.md]
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
//////////////////////////////////////////////////////////////////////
export function getPostsByTag(tag, fields) {
  const allPosts = getAllPosts(fields);

  //해당 태그가 있는 포스트만 필터링하는 함수
  const filteredByTagPosts = allPosts.filter((post) => {
    //tags라는 key를 가지면서 해당 tag가 존재하는 포스트만 필터링
    return Object.keys(post).includes("tags") && post.tags.includes(tag);
  });

  return filteredByTagPosts;
}

//////////////////////////////////////////////////////////////////////
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

//오늘 날짜 구하기 ex) 2/28
export function getToday() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  return `${month}/${date}`;
}

//오늘 날짜에 관련된 한줄 가져오기
export async function getTodayFact() {
  const today = getToday();

  try {
    const response = await fetch(`http://numbersapi.com/${today}/date`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.text();

    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getWeather() {
  const city = "Seoul,KR";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_weather_APIKEY}&lang=kr`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
