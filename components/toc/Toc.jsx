import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./Toc.module.scss";
const Toc = () => {
  const router = useRouter();
  const [headingEls, setHeadingEls] = useState([]);

  useEffect(() => {
    //해당 파일의 h1,h2,h3의 엘리먼츠를 선택하여 배열로 만듬
    const headingElements = Array.from(document.querySelectorAll("h1, h2, h3"));

    //headingEls에 쿼리셀렉터로 가져온 배열을 넣음 넣음
    setHeadingEls(headingElements);

    //헤딩 엘리먼츠로 가져온
    headingElements.forEach((header, index) => {
      header.id = `${header.tagName.toLowerCase()}_${index}`;
    });
  }, [router.pathname]);

  return (
    <div className={classes.container}>
      <span>목차</span>
      {headingEls.map((element, index) => {
        if (element.tagName === "H1") {
          return (
            <div key={`${element + index}`}>
              <a href={`#${element.id}`} className={classes.h1}>
                {element.textContent}
              </a>
            </div>
          );
        } else if (element.tagName === "H2") {
          return (
            <div key={`${element + index}`}>
              <a href={`#${element.id}`} className={classes.h2}>
                {element.textContent}
              </a>
            </div>
          );
        } else if (element.tagName === "H3") {
          return (
            <div key={`${element + index}`}>
              <a href={`#${element.id}`} className={classes.h3}>
                {element.textContent}
              </a>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Toc;
