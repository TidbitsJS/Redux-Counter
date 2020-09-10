import React from "react";

import "./App.css";
import { createStore } from "redux";

import Counter from "./components/counter/Counter";

const defaultState = {
  count: 7,
  name: "bob",
};

function reducer(state = defaultState, action) {
  console.log({ state, action });
  return state;
}

const store = createStore(reducer);

console.log(store.getState());

function App() {
  return (
    <div className="App">
      <Counter state={store.getState()} />
    </div>
  );
}

export default App;
