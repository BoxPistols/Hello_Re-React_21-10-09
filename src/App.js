import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(100);

  const countUp = () => {
    setCount((prev) => count + 2);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{count}</h2>
      <button onClick={countUp}>countUp</button>
    </div>
  );
}
