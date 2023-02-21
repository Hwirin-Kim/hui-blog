import { useEffect, useRef } from "react";

const Comments = () => {
  const commentsRef = useRef();

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.async = true;
    scriptEl.crossOrigin = "anonymous";
    scriptEl.setAttribute("repo", "Hwirin-Kim/hui-blog");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "github-dark");
    scriptEl.setAttribute("label", "💬 Discussion");
    commentsRef.current?.appendChild(scriptEl);
    console.log("두번반복?");
  }, []);

  return <section ref={commentsRef} />;
};

export default Comments;
