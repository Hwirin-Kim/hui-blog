import { getAllPosts, getLinkContent, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import Post from "@/components/post/Post.jsx";
import Head from "next/head";

const Slug = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="icon" href="/favicon.ico" />
        {/* 오픈 그래프 태그 */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        {/* 트위터 카드 태그 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
      </Head>
      <Post post={post} />;
    </>
  );
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
