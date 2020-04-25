import actions from "../../actions";
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
    if (action.type === actions.cart.item.add.type) {
        actions.cart.loading.toggle.dispatch();

        const cart = getCart(state, config);
        cart.then(id => {
            axios.post(config.api.url + '/cart/' + id + '/items', action.payload)
                .then(response => {
                    response.data.items = map(state, response.data.items);
                    actions.cart.updated.dispatch(response.data);
                    actions.cart.loading.toggle.dispatch();
                    actions.general.notification.toggle.dispatch({
                        type: 'success',
                        message: 'Item Added Succesfully'
                    });
                })
                .catch(err => {
                    actions.cart.loading.toggle.dispatch();
                    actions.general.notification.toggle.dispatch({
                        type: 'warning',
                        message: 'There is some error in process please try again later'
                    });
                });
        });
    }

    return next(action);
}

export default addToCart;