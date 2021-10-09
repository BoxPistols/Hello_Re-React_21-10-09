import React, { useState } from "react";
import "./styles.scss";

export default function App() {
  // counter state
  const [count, setCount] = useState(100);

  const countUp = () => {
    setCount((prev) => count + 2);
  };

  const countDown = () => {
    setCount((prev) => count - 2);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{count}</h2>
      <button onClick={countUp}>countUp</button>
      <button onClick={countDown}>countDown</button>
    </div>
  );
}
