import classes from "./Main.module.scss";
import Clock from "./Clock";
import Weather from "./Weather";

const Main = ({ res, weather, tagArry }) => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();
  console.log(tagArry);
  return (
    <div className={classes.container}>
      <div className={classes.date}>
        지금은 {year}년 {month}월 {day}일 <Clock /> 입니다.
      </div>

      <div>{res}</div>
      <Weather weather={weather} />
      <div>Tags</div>
      <div>
        {tagArry.map((tag) => {
          return <div key={tag}>{tag}</div>;
        })}
      </div>
    </div>
  );
};

export default Main;
