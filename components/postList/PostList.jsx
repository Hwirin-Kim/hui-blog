import { useState } from "react";
import PostCard from "../postCard/PostCard";
import classes from "./PostList.module.scss";

const PostList = ({ posts }) => {
  const [category, setCategory] = useState("All Category");
  const onSelectChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <article className={classes.container}>
      <select onChange={onSelectChange}>
        <option>All Category</option>
        <option>TIL</option>
        <option>Javascript</option>
        <option>React</option>
        <option>Next.js</option>
        <option>HTML/CSS</option>
        <option>Network</option>
        <option>Algorithm</option>
        <option>ComputerScience</option>
      </select>
      <p>{category}</p>
      <section className={classes.wrap}>
        {posts.map((post, index) => (
          <PostCard postInfo={post} key={`${post.slug}_${index}`} />
        ))}
      </section>
    </article>
  );
};

export default PostList;
