import PostList from "@/components/postList/PostList";
import { getAllTags, getPostsByTag } from "@/lib/api";

const Tag = ({ posts, params }) => {
  return (
    <PostList posts={posts}>
      <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
        {params.tag}에 관련된 글
      </div>
    </PostList>
  );
};

export default Tag;

export async function getStaticProps(context) {
  const fields = ["slug", "title", "date", "description", "tags", "category"];

  const { params } = context; // {tag : 'apple'}
  const posts = getPostsByTag(params.tag, fields);

  return {
    props: {
      posts,
      params,
    },
  };
}

export async function getStaticPaths() {
  const tags = getAllTags();
  const paths = tags.map((tag) => {
    return {
      params: {
        tag: tag,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
