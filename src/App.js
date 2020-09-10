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
  return "Hello Redux";
}

const store = createStore(reducer, defaultState);

console.log(store.getState());

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
