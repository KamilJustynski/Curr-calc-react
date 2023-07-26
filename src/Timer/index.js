import { TimerContainer } from "./styled";
import { useCurrentDate } from "../useCurrentDate";

const Timer = () => {
  const { time, formattedTime } = useCurrentDate();

  return <TimerContainer>Dzisiaj jest {formattedTime(time)}</TimerContainer>;
};

export default Timer;
