import React, { useState } from "react";

interface Props {
  count: number;
}

const Heading = ({ count }: Props) => {
  return (
    <>
      <div className="title">Counter app</div>
      <div
        className="count2"
        style={{ backgroundColor: count > 0 ? "lightgreen" : count < 0 ? "lightcoral" : "lightgrey" }}
      >
        {count}
      </div>
    </>
  )
};

function App() {
  const [count, setCount] = useState(0);

  function handleclickinc() {
    setCount(count + 1);
  }
  function handleclickdec() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <>
      <Heading count={count} />
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleclickdec}
        >
          -
        </button>
        <button type="button" className="btn btn-warning" onClick={reset}>
          reset
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleclickinc}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
