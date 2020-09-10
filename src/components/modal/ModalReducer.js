import { MODAL_OPEN, MODAL_CLOSE } from "../../config/Actions";

const defaultState = {
  name: "Modal Reducer",
  text: "Modal Text",
  isOpen: false,
};

export default function modalReducer(state = defaultState, action) {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        isOpen: true,
        name: action.payload.name,
        text: action.payload.text,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
        name: "Modal Reducer",
        text: "Modal Text",
      };
    default:
      return state;
  }
}
