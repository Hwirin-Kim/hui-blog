import Toc from "../toc/Toc.jsx";
import classes from "./Post.module.scss";
import Head from "next/head";
import { useEffect } from "react";
import Prism from "prismjs";
import Comments from "../comment/Comments.js";

const Post = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [post.content]);
  return (
    <div className={classes.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css"
        />
      </Head>
      <div className={classes.title}>{post.title}</div>
      <div className={classes.description}>{post.description}</div>
      <div className={classes.date}>{post.date}</div>
      <div className={classes.line} />
      <div className={classes.content_wrap}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <Toc />
      </div>
      <div className={classes.underline}></div>
      <Comments />
    </div>
  );
};

export default Post;
