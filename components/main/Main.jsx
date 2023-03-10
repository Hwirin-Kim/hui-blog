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
        {year}λ {month}μ {day}μΌ <Clock />
      </div>
      <Weather weather={weather} />
      <div className={classes.todayIs}>{res}</div>

      <div className={classes.intro}>
        πββοΈ μλνμΈμ νλ‘ νΈμλ κ°λ°μ κΉνλ¦°μλλ€! <br />
        π§βπ» 2022λ 9μ μ²μ κ°λ°μ μλ¬Ένμ¬ λμμμ΄ λΈλ ₯νκ³ μμ΅λλ€. <br />
        π λ°μ νλ λͺ¨μ΅μ μ§μ  λ§λ  λΈλ‘κ·Έμ λ΄κ³ μΆμ΄μ λΈλ‘κ·Έλ₯Ό λ§λ€μμ΅λλ€.{" "}
        <br />
        π¬ μλͺ»λ μ λ³΄κ° μλ€λ©΄ λκΈμ λ¨κ²¨μ μ§μ ν΄ μ£ΌμκΈ° λ°λλλ€. <br />
        πββοΈ λμμλ μ±μ₯μ μν΄ λΈλ ₯νκ² μ΅λλ€. <br />
        π κ°μ¬ν©λλ€.
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
