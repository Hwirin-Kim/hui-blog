import PostList from "@/components/postList/PostList.jsx";
import { getAllPosts } from "@/lib/api";
import Head from "next/head";
import SelectCategory from "@/components/postList/SelectCategory";

const Category = ({ filteredPosts, params }) => {
  return (
    <>
      <Head>
        <title>Hui-blog</title>
        <meta name="description" content="Hui-blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList posts={filteredPosts}>
        <SelectCategory params={params} />
      </PostList>
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
      params,
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
    "잡담",
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
