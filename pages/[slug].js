import { getAllPosts, getPostBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

const Post = ({ post }) => {
  return (
    <>
      <div>{post.title}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
    "lastmod",
    "weight",
    "content",
    "fileName",
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

export default Post;