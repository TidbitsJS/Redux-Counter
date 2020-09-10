import React from "react";

import "./App.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import Counter from "./components/counter/Counter";
import Modal from "./components/modal/Modal";

import countReducer from "./components/counter/CountReducer";
import productReducer from "./components/product/ProductReducer";
import modalReducer from "./components/modal/ModalReducer";

const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Modal />
    </Provider>
  );
}

export default App;
