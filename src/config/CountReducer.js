import { DECREASE, INCREASE, RESET } from "./Actions";

const defaultState = {
  count: 7,
  name: "bob",
};

export default function reducer(state = defaultState, action) {
  console.log({ state, action });

  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
