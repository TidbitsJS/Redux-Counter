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
  if (action.type === "DECREASE") {
    console.log("Hey it worked");
    return { ...state, count: state.count - 1 };
  }

  return state;
}

const store = createStore(reducer, defaultState);

store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "DECREASE" });
console.log(store.getState());

function App() {
  return (
    <div className="App">
      <Counter state={store.getState()} />
    </div>
  );
}

export default App;
