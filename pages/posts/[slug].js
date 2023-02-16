import { getAllPosts, getLinkContent, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Post from "@/components/post/Post";
import { useEffect, useLayoutEffect, useState } from "react";
const Slug = ({ post }) => {
  const [toc, setToc] = useState([]);
  const [scroll, setScroll] = useState();
  const tocc = [];
  useEffect(() => {
    const nodeList = document?.querySelectorAll("h1, h2, h3");
    console.log("노드리스트", nodeList);
    nodeList.forEach((node) => {
      console.log(node.textContent);
      tocc.push({ scroll: node.scrollHeight, text: node.textContent });
    });
  }, []);
  console.log("toc콘솔로그", tocc);
  return <Post post={post} />;
};
//getStaticProps로 동적 라우팅 경로의 이름을 가져옴 여기는 [slug]에 있으므로
// params : {slug : 동적이름} 이런식으로 나오게 될것임
export async function getStaticProps(props) {
  const post = getPostBySlug(props.params.slug, [
    "title",
    "slug",
    "description",
    "date",
    "category",
    "published",
    "content",
    "tags",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Slug;
