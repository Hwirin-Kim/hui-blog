import PostCard from "../postCard/PostCard";
import classes from "./PostList.module.scss";
const PostList = ({ posts }) => {
  return (
    <main className={classes.wrap}>
      {posts.map((post, index) => (
        <PostCard postInfo={post} key={`${post.slug}_${index}`} />
      ))}
    </main>
  );
};

export default PostList;
