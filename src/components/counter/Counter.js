import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button
          type="button"
          onClick={() => setCount(count - 1)}
          className="btn"
        >
          decrease
        </button>
        <button type="button" onClick={() => setCount(0)} className="btn">
          reset
        </button>
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="btn"
        >
          increase
        </button>
      </div>
    </div>
  );
}

export default Counter;
