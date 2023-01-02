import React, {useState} from "react";
import {useKeyPressEvent} from "react-use";

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count => count + 1);
  const decrement = () => setCount(count => count - 1);

  useKeyPressEvent("e", increment);
  useKeyPressEvent("r", decrement);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
