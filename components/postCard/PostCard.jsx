import { onClickToPage } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./PostCard.module.scss";
const PostCard = ({ postInfo }) => {
  const { slug, description, title, date } = postInfo;
  const router = useRouter();
  const onClickToPage = (page) => {
    router.push(`/${page}`);
  };

  return (
    <hgroup
      className={classes.container}
      onClick={() => onClickToPage(`/posts/${slug}`)}
    >
      <h1>{title}</h1>
      <p>{date}</p>
      <em>{description}</em>
    </hgroup>
  );
};

export default PostCard;
