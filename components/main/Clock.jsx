import { useEffect, useState } from "react";
import classes from "./Clock.module.scss";
const Clock = () => {
  const [time, setTime] = useState();
  const [ampm, setAmpm] = useState("");
  const getTime = () => {
    const date = new Date();
    const filterTime = date.toLocaleTimeString().split(" ")[1];

    setTime(filterTime);
  };
  const date = new Date();
  const amData = date.toLocaleTimeString().split(" ")[0];

  useEffect(() => {
    setInterval(getTime, 1000);
    return () => {
      setInterval(getTime, 1000);
    };
  }, []);

  return (
    <p className={classes.p}>
      {amData} {time}{" "}
    </p>
  );
};

export default Clock;
