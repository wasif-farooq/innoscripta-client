import {
    CART_UPDATED,
    UPDATE_CART_ITEM_QTY,
    CART_TOGGLE_LOADING
} from "../../actions";
import axios from "axios";
import config from "../../config";
import map from './map';

const updateCartItemQty = store => next => action => {

    const state = store.getState();
    if (action.type === UPDATE_CART_ITEM_QTY) {

        store.dispatch({type: CART_TOGGLE_LOADING});

        axios.patch(config.api.url + '/cart/' + state.cart.id + '/items/' + action.payload.id, {
            quantity: action.payload.quantity
        }).then(response => {
            response.data.items = map(state, response.data.items);
            store.dispatch({
                type: CART_UPDATED,
                payload: response.data
            })

            store.dispatch({type: CART_TOGGLE_LOADING});
        }).catch(console.log)

    }

    return next(action);
}

export default updateCartItemQty;