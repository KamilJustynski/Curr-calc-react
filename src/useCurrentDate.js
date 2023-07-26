import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const formattedTime = () =>
    time.toLocaleString(undefined, {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      day: "numeric",
      month: "long",
    });

  return { useCurrentDate, formattedTime };
};
