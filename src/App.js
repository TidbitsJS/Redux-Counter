import React from "react";

import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Counter from "./components/counter/Counter";
import reducer from "./config/Reducers";

const defaultState = {
  count: 7,
  name: "bob",
};

const store = createStore(reducer, defaultState);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
