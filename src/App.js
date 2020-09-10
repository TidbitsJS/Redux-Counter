import React from "react";

import "./App.css";
import { createStore } from "redux";

import Counter from "./components/counter/Counter";

const defaultState = {
  count: 7,
  name: "bob",
};

function reducer(state, action) {
  console.log({ state, action });

  switch (action.type) {
    case "DECREASE":
      return { ...state, count: state.count - 1 };
    case "INCREASE":
      return { ...state, count: state.count + 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
}

const store = createStore(reducer, defaultState);

store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "RESET" });
console.log(store.getState());

function App() {
  return (
    <div className="App">
      <Counter state={store.getState()} />
    </div>
  );
}

export default App;
