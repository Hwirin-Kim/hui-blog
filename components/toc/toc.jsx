import { getIntersectionObserver } from "@/lib/observer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Toc = () => {
  const router = useRouter();
  const [currentId, setCurrentId] = useState("");
  const [headingEls, setHeadingEls] = useState([]);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const headingElements = Array.from(document.querySelectorAll("h2, h3"));
    setHeadingEls(headingElements);
    headingElements.map((header) => {
      observer.observe(header);
    });
  }, [router]);
  console.log("헤딩엘스", headingEls);

  return (
    <>
      <div>
        <div>
          {headingEls.map((h, i) =>
            h.nodeName === "H2" ? (
              <div
                data-depth="1"
                key={i}
                data-active={currentId === h.id ? true : false}
              >
                <a href={`#${h.id}`}>{h.textContent}</a>
              </div>
            ) : (
              <div
                data-depth="2"
                key={i}
                data-active={currentId === h.id ? true : false}
              >
                <a href={`#${h.id}`}>{h.textContent}</a>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

const originPath = (asPath) => {
  asPath.split("#");
  return asPath[0];
};

export default Toc;
