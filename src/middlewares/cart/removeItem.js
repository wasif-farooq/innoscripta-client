import {
    CART_REMOVE_ITEM,
    CART_UPDATED,
    CART_TOGGLE_LOADING
} from "../../actions";
import axios from "axios";
import config from "../../config";
import map from './map';

const remoteItem = store => next => action => {

    const state = store.getState();

    if (action.type === CART_REMOVE_ITEM) {
        store.dispatch({type: CART_TOGGLE_LOADING});

        axios.delete(config.api.url + '/cart/' + state.cart.id + '/items/' + action.payload.id, )
            .then(response => {
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

export default remoteItem;