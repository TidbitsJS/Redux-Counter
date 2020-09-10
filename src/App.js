import React from "react";

import "./App.css";
import { createStore } from "redux";

import Counter from "./components/counter/Counter";
import { DECREASE, INCREASE, RESET } from "./config/Actions";
import reducer from "./config/Reducers";

const defaultState = {
  count: 7,
  name: "bob",
};

const store = createStore(reducer, defaultState);

store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: RESET });
store.dispatch({ type: INCREASE });

console.log(store.getState());

function App() {
  return (
    <div className="App">
      <Counter state={store.getState()} />
    </div>
  );
}

export default App;
