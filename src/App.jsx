import { useEffect, useRef, useState } from "react";

const App = () => {
  let setIntervalId = useRef(0);
  let [isRunning, setIsRunning] = useState(false);
  let [secondsCounter, setSecondsCounter] = useState(0);
  let [minutesCounter, setMinutesCounter] = useState(0);
  let [hoursCounter, setHoursCounter] = useState(0);
  const startWatch = () => {
    setIsRunning(true);
    setIntervalId.current = setInterval(() => {
      setSecondsCounter((secondsCounter) => secondsCounter + 1);
    }, 1000);
  };
  useEffect(() => {
    if (secondsCounter > 59) {
      setSecondsCounter(0);
      setMinutesCounter((minutesCounter) => minutesCounter + 1);
    }
  }, [secondsCounter]);
  useEffect(() => {
    if (minutesCounter > 59) {
      setMinutesCounter(0);
      setHoursCounter((hoursCounter) => hoursCounter + 1);
    }
  }, [minutesCounter]);
  const stopWatch = () => {
    setIsRunning(false)
    clearInterval(setIntervalId.current);
    setIntervalId.current = 0;
  };
  const resetWatch = () => {
    setIsRunning(false);
    clearInterval(setIntervalId.current);
    setIntervalId.current = 0;
    setSecondsCounter(0);
    setMinutesCounter(0);
    setHoursCounter(0);
  };
  return (
    <>
      <div className="h-screen font-[Audiowide] bg-sky-50 text-center">
        <h1 className="text-7xl uppercase pt-10 pb-75 font-black text-sky-950">
          StopWatch
        </h1>
        <div className="flex flex-col justify-center items-center gap-20">
          <p className="text-sky-800 text-7xl sm:text-8xl md:text-9xl font-black">
            <span>{hoursCounter < 10 ? "0" + hoursCounter : hoursCounter}</span>
            :
            <span>
              {minutesCounter < 10 ? "0" + minutesCounter : minutesCounter}
            </span>
            :
            <span>
              {secondsCounter < 10 ? "0" + secondsCounter : secondsCounter}
            </span>
          </p>
          <div className="flex gap-5 text-3xl text-white font-medium">
            <button
              className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-xl uppercase cursor-pointer disabled:bg-green-200 disabled:cursor-not-allowed"
              onClick={startWatch}
              disabled={isRunning}
            >
              Start
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded-xl uppercase cursor-pointer disabled:bg-red-200 disabled:cursor-not-allowed"
              onClick={stopWatch}
              disabled={!isRunning}
            >
              Stop
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-xl uppercase cursor-pointer"
              onClick={resetWatch}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
