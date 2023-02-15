import PostCard from "@/components/postCard/PostCard";
import PostList from "@/components/postList/PostList";
import { getAllPosts } from "@/lib/api";
import Head from "next/head";

import styles from "../styles/Home.module.css";
const Home = ({ posts }) => {
  return (
    <div className={styles.container}>
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
  const posts = getAllPosts(["slug", "title", "date"]);
  // const posts = [
  //   { title: '테스트', author: 'ctdlog' },
  //   { title: '저는 바보입니다', author: '바보' },
  //   { title: '코딩 잘하는법', author: '저도 몰라요' },
  // ];

  return {
    props: {
      posts,
    },
  };
}

export default Home;
