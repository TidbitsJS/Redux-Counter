import React, { useState } from "react";
import { connect } from "react-redux";

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="counter">{props.count}</p>
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

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(Counter);
