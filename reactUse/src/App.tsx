import React, {useRef, useState} from "react";
import {useClickAway, useKeyPressEvent, useWindowScroll, useWindowSize} from "react-use";
import "./app.css";

export default function App() {
  const popupRef = useRef(null);

  const [count, setCount] = useState(0);
  const increment = () => setCount(count => count + 1);
  const decrement = () => setCount(count => count - 1);

  useKeyPressEvent("e", increment);
  useKeyPressEvent("r", decrement);

  const { x, y } = useWindowScroll();
  const { width, height } = useWindowSize();

  useClickAway(popupRef, () => console.warn("Clicked Outside"));

  console.log({x, y});
  console.log({width, height});

  return (
    <div>
      <h1>{count}</h1>
      <h3>x: {x}</h3>
      <h3>y: {y}</h3>
      <h3>Window size: {`${width} x ${height}`}</h3>

      <div ref={popupRef} className="popup"></div>
    </div>
  );
}
