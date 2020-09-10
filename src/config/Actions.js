export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const RESET = "RESET";

export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";

export const SET_LOADING = "SET_LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";

/*

export const decrease = () => {
    return { type: DECREASE }
}

export const increase = () => {
    return { type: INCREASE }
}

export const reset = () => {
    return { type: RESET }
}

export const modalOpen = (name, text) => {
    return { type: MODAL_OPEN, payload: {
        name, text
    } }
}

*/

export const setLoading = () => {
  return { type: SET_LOADING };
};

export const getProducts = () => {
  return async function (dispatch) {
    dispatch(setLoading());
    const response = await fetch("http://jsonplaceholder.typicode.com/photos");
    let data = await response.json();
    data = data.splice(0, 10);
    console.log(data);
    dispatch({ type: GET_PRODUCTS, payload: data });
  };
};
