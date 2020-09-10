import { SET_LOADING, GET_PRODUCTS } from "../../config/Actions";

const defaultState = {
  loading: false,
  products: [],
};

export default function productReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_PRODUCTS:
      return { ...state, loading: false, products: action.payload };
    default:
      return state;
  }
}
