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

export const getLinkContent = (content) => {
  return content.replace(/ /g, "_").toLowerCase();
};
