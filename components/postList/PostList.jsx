import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PostCard from "../postCard/PostCard";
import classes from "./PostList.module.scss";

const PostList = ({ posts }) => {
  const router = useRouter();
  const [category, setCategory] = useState("All Category");
  const onSelectChange = (event) => {
    //선택된 option의 text를 가져와서 사용
    const selectElement = document.getElementById("mySelect");
    const selectedOptionText =
      selectElement.options[selectElement.selectedIndex].text;
    setCategory(selectedOptionText);
    router.push(`/posts/${event.target.value}`);
  };

  return (
    <article className={classes.container}>
      <select id={"mySelect"} onChange={onSelectChange}>
        <option disabled>카테고리</option>
        <option value={"allcategory"} name={"All Category"}>
          All Category
        </option>
        <option value={"til"} name={"TIL"}>
          TIL
        </option>
        <option value={"javascript"} name={"Javascript"}>
          Javascript
        </option>
        <option value={"react"} name={"React"}>
          React
        </option>
        <option value={"nextjs"} name={"Next.js"}>
          Next.js
        </option>
        <option value={"htmlcss"} name={"HTML/CSS"}>
          HTML/CSS
        </option>
        <option value={"network"} name={"Network"}>
          Network
        </option>
        <option value={"algorithm"} name={"Algorithm"}>
          Algorithm
        </option>
        <option value={"computerscience"} name={"Computer Science"}>
          ComputerScience
        </option>
      </select>
      <p className={classes.category}>{category}</p>
      <section className={classes.wrap}>
        {posts.map((post, index) => (
          <PostCard postInfo={post} key={`${post.slug}_${index}`} />
        ))}
      </section>
    </article>
  );
};

export default PostList;
