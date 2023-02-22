import { useRouter } from "next/router";
import classes from "./PostCard.module.scss";
const PostCard = ({ postInfo }) => {
  const { slug, description, title, date, tags } = postInfo;
  const router = useRouter();
  const onClickToPage = (page) => {
    router.push(`${page}`);
  };

  return (
    <hgroup
      className={classes.container}
      onClick={() => onClickToPage(`/posts/post/${slug}`)}
    >
      <h1>{title}</h1>
      <em>{description}</em>
      <p>{date}</p>

      <div className={classes.tags}>
        <p className={classes.keyword}>Tags</p>
        {tags ? (
          tags.map((tag) => {
            return <div key={tag}>{tag}</div>;
          })
        ) : (
          <div>none</div>
        )}
      </div>
    </hgroup>
  );
};

export default PostCard;
