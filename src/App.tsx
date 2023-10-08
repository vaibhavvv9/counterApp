import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Function to start the counter
  const startCounter = () => {
    setIsRunning(true);
  };

  // Function to pause the counter
  const pauseCounter = () => {
    setIsRunning(false);
  };

  // Function to reset the counter
  const resetCounter = () => {
    setIsRunning(false);
    setCounter(0);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    } else {
      clearInterval(interval as NodeJS.Timeout);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      {isRunning ? (
        <button onClick={pauseCounter}>Pause</button>
      ) : (
        <button onClick={startCounter}>Start</button>
      )}
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default App;
