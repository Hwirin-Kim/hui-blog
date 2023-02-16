const Post = ({ post }) => {
  console.log(post);
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.description}</div>
      <div>{post.date}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default Post;
