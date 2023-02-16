import { onClickToPage } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./PostCard.module.scss";
const PostCard = ({ postInfo }) => {
  const { slug, description, title, date, tags } = postInfo;
  const router = useRouter();
  console.log(tags);
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
      {tags ? (
        tags.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })
      ) : (
        <li>none</li>
      )}
    </hgroup>
  );
};

export default PostCard;
