import PostCard from "@/components/postCard/PostCard";
import PostList from "@/components/postList/PostList";
import { getAllPosts } from "@/lib/api";
import Head from "next/head";

const Home = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Hui-blog</title>
        <meta name="description" content="Hui-blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList posts={posts} />
    </div>
  );
};

export async function getStaticProps() {
  // data fetching
  const posts = getAllPosts([
    "slug",
    "title",
    "date",
    "description",
    "tags",
    "category",
  ]);

  return {
    props: {
      posts,
    },
  };
}

export default Home;
