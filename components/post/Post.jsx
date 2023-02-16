import Toc from "../toc/toc";
import classes from "./Post.module.scss";

const Post = ({ post }) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>{post.title}</div>
      <div className={classes.description}>{post.description}</div>
      <div className={classes.date}>{post.date}</div>
      <div className={classes.line} />
      <div className={classes.content_wrap}>
        <Toc />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className={classes.index}>인덱스지롱</div>
      </div>
    </div>
  );
};

export default Post;
