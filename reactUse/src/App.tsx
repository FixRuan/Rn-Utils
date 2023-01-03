import React, {useState} from "react";
import {useKeyPressEvent, useWindowScroll, useWindowSize} from "react-use";

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count => count + 1);
  const decrement = () => setCount(count => count - 1);

  useKeyPressEvent("e", increment);
  useKeyPressEvent("r", decrement);

  const { x, y } = useWindowScroll();
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>{count}</h1>
      <h3>x: {x}</h3>
      <h3>y: {y}</h3>
      <h3>Window size: {`${width} x ${height}`}</h3>     
    </div>
  );
}
