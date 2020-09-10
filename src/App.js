import React from "react";

import "./App.css";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import Counter from "./components/counter/Counter";
import Modal from "./components/modal/Modal";
import Product from "./components/product/Product";

import countReducer from "./components/counter/CountReducer";
import productReducer from "./components/product/ProductReducer";
import modalReducer from "./components/modal/ModalReducer";

const middleware = [thunk];

const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Modal />
      <Product />
    </Provider>
  );
}

export default App;
