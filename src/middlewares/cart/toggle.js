import {
    HIDE_CART,
    SHOW_CART,
    TOGGLE_CART
} from "../../actions";

const toggle = store => next => action => {

    const state = store.getState();
    if (action.type === TOGGLE_CART) {
        state.cart.show ?
            store.dispatch({type: HIDE_CART}):
            store.dispatch({type: SHOW_CART})
    }

    return next(action);
}

export default toggle;