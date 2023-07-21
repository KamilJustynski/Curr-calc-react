import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="timer">
      Dzisiaj jest{" "}
      {time.toLocaleString(undefined, {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "numeric",
        month: "long",
      })}
    </div>
  );
};

export default Timer;
