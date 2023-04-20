import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

//포스트의 마크다운있는 폴더 경로 가져오기, process.cwd는 루트 폴더 경로이다.
const postsDirectory = join(process.cwd(), "/posts");

//마크다운 제목 가져오기 ex) [test.md, test2.md] 배열로 가져옴
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

//파일이름으로 포스트 가져오기
export function getPostBySlug(slug, fields) {
  //realSlug : 확장자를제거한제목, fullPath : 총 경로, fileContents에 utf8을 넣지않으면 바이너리데이터나옴
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return fields.reduce((acc, field) => {
    if (field === "slug") acc[field] = realSlug;
    if (field === "content") acc[field] = content;
    if (typeof data[field] !== "undefined") acc[field] = data[field];
    return acc;
  }, {});
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

//해당 태그가 있는 포스트들 불러오기
export function getPostsByTag(tag, fields) {
  const allPosts = getAllPosts(fields);
  return allPosts.filter((post) => "tags" in post && post.tags.includes(tag));
}

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

//태그 모두 가져오기
export function getAllTags() {
  const slugs = getPostSlugs();
  const tags = slugs.flatMap((slug) => {
    const tag = getTagBySlug(slug);
    return tag !== null ? tag : [];
  });

  //중복제거
  return Array.from(new Set(tags));
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
