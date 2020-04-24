import {
    CART_TOGGLE_LOADING,
    CART_SHOW_LOADING,
    CART_HIDE_LOADING,
} from "../../actions";

const loading = store => next => action => {

    const state = store.getState();
    if (action.type === CART_TOGGLE_LOADING) {
        state.cart.loading ?
            store.dispatch({type: CART_HIDE_LOADING}):
            store.dispatch({type: CART_SHOW_LOADING})
    }

    return next(action);
}

export default loading;