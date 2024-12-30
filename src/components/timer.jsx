import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
export default function Timer() {
  const [time, setTime] = useState(10);

  const [isRunning, setIsRunning] = useState(false);
  const handleSetTime = (time) => {};
  return (
    <div>
      <h1>Timer</h1>
      <CountdownCircleTimer
        isPlaying={isRunning}
        duration={time}
        colors={["#FF0000", "#00FF00", "#0000FF"]}
        onComplete={() => {
          return { shouldRepeat: true, delay: 1.5 };
        }}
        onUpdate={(time) => {
          handleSetTime(time);
        }}
      >
        {({ remainingTime }) => {
          const hours = Math.floor(remainingTime / 3600);
          const minutes = Math.floor((remainingTime % 3600) / 60);
          const seconds = remainingTime % 60;

          return `${hours}:${minutes}:${seconds}`;
        }}
      </CountdownCircleTimer>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "stop" : "start"}
      </button>
      <button onClick={() => setTime(time + 3600)}>+1 hour</button>
      <button onClick={() => setTime(time + 60)}>+1 Minute</button>
      <button onClick={() => setTime(time + 1)}>+1 second</button>
      <button
        onClick={() => setTime((time) => (time >= 3600 ? time - 3600 : time))}
      >
        -1 hour
      </button>
      <button
        onClick={() => setTime((time) => (time >= 60 ? time - 60 : time))}
      >
        -1 minute
      </button>
      <button onClick={() => setTime((time) => (time >= 1 ? time - 1 : time))}>
        -1 second
      </button>
    </div>
  );
}
