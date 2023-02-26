import classes from "./Main.module.scss";
import Clock from "./Clock";
import Weather from "./Weather";
import { useRouter } from "next/router";

const Main = ({ res, weather, tagArry }) => {
  const router = useRouter();
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();
  const onClickToPage = (page) => {
    router.push(`${page}`);
  };

  return (
    <div className={classes.container}>
      <div className={classes.date}>
        {year}년 {month}월 {day}일 <Clock />
      </div>
      <Weather weather={weather} />
      <div className={classes.todayIs}>{res}</div>

      <div className={classes.intro}>
        🙇‍♂️ 안녕하세요 프론트엔드 개발자 김휘린입니다! <br />
        🧑‍💻 2022년 9월 처음 개발에 입문하여 끊임없이 노력하고있습니다. <br />
        📚 발전하는 모습을 직접 만든 블로그에 담고싶어서 블로그를 만들었습니다.{" "}
        <br />
        💬 잘못된 정보가 있다면 댓글을 남겨서 지적해 주시기 바랍니다. <br />
        🏃‍♂️ 끊임없는 성장을 위해 노력하겠습니다. <br />
        😀 감사합니다.
      </div>
      <div className={classes.tagTitle}>Tags</div>
      <div className={classes.tagWrap}>
        {tagArry.map((tag) => {
          return (
            <div
              className={classes.tag}
              key={tag}
              onClick={() => onClickToPage(`/posts/tag/${tag}`)}
            >
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
