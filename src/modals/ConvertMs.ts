import { FC } from 'react';

interface IConvertMsProps {
  ms: number;
}


const ConvertMs: FC<IConvertMsProps> = ({ms}): any => {
  // Number of milliseconds per unit of time
  const second: number = 1000;
  const minute: number = second * 60;
  const hour: number = minute * 60;
  const day: number = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

export default ConvertMs;