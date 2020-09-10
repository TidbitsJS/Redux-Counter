import React from "react";

import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Counter from "./components/counter/Counter";

import countReducer from "./components/counter/CountReducer";
import productReducer from "./components/product/ProductReducer";

const defaultState = {
  count: 7,
  name: "bob",
};

const store = createStore(
  countReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
