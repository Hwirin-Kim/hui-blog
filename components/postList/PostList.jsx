import PostCard from "../postCard/PostCard.jsx";
import classes from "./PostList.module.scss";

const PostList = ({ posts, children }) => {
  return (
    <article className={classes.container}>
      {children}

      <section className={classes.wrap}>
        {posts.map((post, index) => (
          <PostCard postInfo={post} key={`${post.slug}_${index}`} />
        ))}
      </section>
    </article>
  );
};

export default PostList;
