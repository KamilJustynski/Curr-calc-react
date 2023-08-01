import { TimerContainer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";
import { formattedTime } from "./formattedTime";



const Timer = () => {
  const { time } = useCurrentDate();


  return <TimerContainer>Dzisiaj jest {formattedTime(time)}</TimerContainer>;
};

export default Timer;
