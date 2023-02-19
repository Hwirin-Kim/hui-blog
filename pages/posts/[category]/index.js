import PostList from "@/components/postList/PostList";
import { getAllPosts } from "@/lib/api";
import Head from "next/head";

const Category = ({ filteredPosts }) => {
  return (
    <>
      <Head>
        <title>Hui-blog</title>
        <meta name="description" content="Hui-blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList posts={filteredPosts} />
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;

  // data fetching
  const posts = await getAllPosts([
    "slug",
    "title",
    "date",
    "description",
    "tags",
    "category",
  ]);

  let filteredPosts;
  if (params.category === "allcategory") {
    filteredPosts = posts;
  } else {
    filteredPosts = posts.filter((post) => {
      return post.category === params.category;
    });
  }

  return {
    props: {
      filteredPosts,
    },
  };
}

export async function getStaticPaths() {
  const categories = [
    "allcategory",
    "til",
    "javascript",
    "react",
    "nextjs",
    "htmlcss",
    "network",
    "algorithm",
    "computerscience",
  ];
  const paths = categories.map((category) => ({
    params: {
      category: category,
    },
  }));
  return {
    paths: paths,

    fallback: false,
  };
}

export default Category;
