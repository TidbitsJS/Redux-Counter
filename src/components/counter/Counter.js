import React from "react";
import { connect } from "react-redux";
import { DECREASE, INCREASE, RESET, MODAL_OPEN } from "../../config/Actions";

function Counter(props) {
  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="counter">{props.count}</p>
      <div className="buttons">
        <button type="button" onClick={props.decrease} className="btn">
          decrease
        </button>
        <button type="button" onClick={props.reset} className="btn">
          reset
        </button>
        <button type="button" onClick={props.increase} className="btn">
          increase
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({ countState: { count, name } }) {
  return { count: count, name: name };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);

  return {
    increase: () => dispatch({ type: INCREASE }),
    decrease: () => dispatch({ type: DECREASE }),
    reset: () => {
      dispatch({ type: RESET });
      dispatch({
        type: MODAL_OPEN,
        payload: {
          text: "Here I go , there I am. Looking up , up & up.",
          name: "Random Soul",
        },
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
