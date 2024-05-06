import { useEffect, useState } from "react";

export const useTimer = (timerInterval: number) => {
  const [timer, setTimer] = useState(timerInterval);
  useEffect(() => {
      if (timer <= 0) {
          setTimer(0);
          return;
      }
      const interval = setInterval(() => {
          setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
  }, [timer]);
  const resetTimer = () => {
      setTimer(timerInterval);
  };
  const isPending = timer > 0;
  return [timer, resetTimer, isPending] as const;
//   const [timer, setTimer] = useState(timerInterval);
//   const [timeStamp, setTimeStamp] = useState(Date.now() + timerInterval * 1000);
//   useEffect(() => {
//     if (timer <= 0) {
//       setTimer(0);
//       return;
//     }
//     const interval = setInterval(() => {
//         const remainingTime = Math.max(0, Math.floor((timeStamp - Date.now()) / 1000));
//         setTimer(remainingTime);
//       }, 500);
//     return () => {
//       console.log("clearing interval");
//       clearInterval(interval);
//     };
//   }, [timer, timeStamp]);
//   const resetTimer = () => {
//     setTimer(timerInterval);
//     setTimeStamp(Date.now() + timerInterval * 1000);
//   };
//   const isPending = timer > 0;
  return [timer, resetTimer, isPending] as const;
};
