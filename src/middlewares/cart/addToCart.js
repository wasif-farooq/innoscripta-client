import {
    ADD_TO_CART,
    CART_UPDATED,
    CART_TOGGLE_LOADING, TOGGLE_NOTIFICATION
} from "../../actions";
import axios from "axios";
import config from "../../config";
import map from './map';

const getCart = (state, config) => {
    return new Promise((resolve, reject) => {
        if (!state.cart.id) {
            axios.post(config.api.url + '/cart', {})
                .then(response => resolve(response.data.id))
                .catch(reject);
        } else {
            resolve(state.cart.id);
        }
    });
}

const addToCart = store => next => action => {

    const state = store.getState();
    if (action.type === ADD_TO_CART) {
        store.dispatch({type: CART_TOGGLE_LOADING});

        const cart = getCart(state, config);

        cart.then(id => {
            axios.post(config.api.url + '/cart/' + id + '/items', action.payload)
                .then(response => {
                    response.data.items = map(state, response.data.items);
                    store.dispatch({
                        type: CART_UPDATED,
                        payload: response.data
                    });
                    store.dispatch({type: CART_TOGGLE_LOADING});
                    store.dispatch({
                        type: TOGGLE_NOTIFICATION,
                        payload: {
                            type: 'success',
                            message: 'Item Added Succesfully'
                        }
                    });
                })
                .catch(err => {
                    store.dispatch({type: CART_TOGGLE_LOADING});
                    store.dispatch({
                        type: TOGGLE_NOTIFICATION,
                        payload: {
                            type: 'warning',
                            message: 'There is some error in process please try again later'
                        }
                    });
                });
        });
    }

    return next(action);
}

export default addToCart;