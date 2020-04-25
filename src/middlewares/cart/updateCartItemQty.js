import actions from "../../actions";
import axios from "axios";
import config from "../../config";
import map from './map';

const updateCartItemQty = store => next => action => {

    const state = store.getState();
    if (action.type === actions.cart.item.quantity.update.type) {

        actions.cart.loading.toggle.dispatch();

        axios.patch(config.api.url + '/cart/' + state.cart.id + '/items/' + action.payload.id, {
            quantity: action.payload.quantity
        }).then(response => {
            response.data.items = map(state, response.data.items);
            actions.cart.updated.dispatch(response.data)
            actions.cart.loading.toggle.dispatch();
        }).catch(console.log)

    }

    return next(action);
}

export default updateCartItemQty;