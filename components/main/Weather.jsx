import classes from "./Weather.module.scss";

const Weather = ({ weather }) => {
  const desc = weather.weather[0].description;
  const temp = Math.ceil(weather.main.temp - 273.15);
  const humidity = weather.main.humidity;
  return (
    <div className={classes.container}>
      현재 서울 날씨 : {desc}, 온도 {temp}℃, 습도 {humidity}%
    </div>
  );
};

export default Weather;
