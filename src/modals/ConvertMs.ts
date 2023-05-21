

const ConvertMs = () => {
  return (
    ConvertMs
  )
}

export default ConvertMs

// import { FC } from 'react';
// interface ConvertMsProps {
//   ms: number;
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }


// const ConvertMs: FC<ConvertMsProps> = ({ms}) => {
//   // Number of milliseconds per unit of time
//   const second: number = 1000;
//   const minute: number = second * 60;
//   const hour: number = minute * 60;
//   const day: number = hour * 24;

//   // Remaining days
//   const days: number = Math.floor(ms / day);
//   // Remaining hours
//   const hours: number = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes: number = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds: number = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// export default ConvertMs;