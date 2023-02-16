import PostCard from "@/components/postCard/PostCard";
import PostList from "@/components/postList/PostList";
import { getAllPosts } from "@/lib/api";
import Head from "next/head";

import styles from "../styles/Home.module.css";
const Home = ({ posts }) => {
  return (
    <div className={styles.container}>
      <h1>main Page</h1>
    </div>
  );
};

export default Home;
