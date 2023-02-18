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
  }, [router]);

  return (
    <div className={classes.container}>
      {headingEls.map((element, index) => (
        <div key={`${element + index}`}>
          <a href={`#${element.id}`}>{element.textContent}</a>
        </div>
      ))}
    </div>
  );
};

export default Toc;
