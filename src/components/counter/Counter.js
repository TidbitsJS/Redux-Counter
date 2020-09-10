import React from "react";
import { connect } from "react-redux";
import { DECREASE, INCREASE, RESET } from "../../config/Actions";

function Counter(props) {
  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="counter">{props.count}</p>
      <div className="buttons">
        <button
          type="button"
          onClick={() => props.dispatch({ type: DECREASE })}
          className="btn"
        >
          decrease
        </button>
        <button
          type="button"
          onClick={() => props.dispatch({ type: RESET })}
          className="btn"
        >
          reset
        </button>
        <button
          type="button"
          onClick={() => props.dispatch({ type: INCREASE })}
          className="btn"
        >
          increase
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({ countState: { count, name } }) {
  return { count: count, name: name };
}

/*

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps)

  return {
    increase: () => dispatch({ type: INCREASE }),
    decrease: () => dispatch({ type: DECREASE }),
    reset: () => dispatch({ type: RESET })
  }
}

*/

export default connect(mapStateToProps)(Counter);
