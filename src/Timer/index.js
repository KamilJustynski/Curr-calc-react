import { TimerContainer } from "./styled";
import { useCurrentDate } from "../useCurrentDate";

const Timer = () => {
  const {date , formattedTime} = useCurrentDate();

  return <TimerContainer>Dzisiaj jest {formattedTime(date)}</TimerContainer>;
};

export default Timer;
