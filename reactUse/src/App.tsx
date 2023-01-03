import React, {useRef, useState} from "react";

import {
  useClickAway,
  useCopyToClipboard,
  useKeyPressEvent,
  useWindowScroll, 
  useWindowSize
} from "react-use";

import "./app.css";

export default function App() {
  const [text, setText] = useState("");
  const [copyState, setCopyState] = useCopyToClipboard();

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

      <br />

      <input value={text} onChange={e => setText(e.target.value)} />
      <button type="button" onClick={() => setCopyState(text)}>
        Copy Text
      </button>

      <br />

      {copyState.error && <span>{copyState.error.message}</span>}
      {copyState.value && <span>Copied {copyState.value}</span>}
    </div>
  );
}
