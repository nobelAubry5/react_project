// updater function = A function passed as an argument to setState() usually
// ex. setYear(year + 1)
//Allow for safe updates based on the previous state
//Used with multiple state updates and asynchronous functions
//Good practice to use updater functions

import { useState } from "react";

function UpdateCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    // Uses the CURRENT state to calculate the NEXT state.
    // set functions do not trigger an update
    // React batches together state updates for performance reasons
    // NEXT state becomes the CURRENT state after an update.

    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => count - 1);
    setCount((count) => count - 1);
    setCount((count) => count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-containet">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
export default UpdateCounter;
