import actions from "../../actions";
import axios from "axios";
import config from "../../config";
import map from './map';

const remoteItem = store => next => action => {

    const state = store.getState();

    if (action.type === actions.cart.item.remove.type) {
        actions.cart.loading.toggle.dispatch();

        axios.delete(config.api.url + '/cart/' + state.cart.id + '/items/' + action.payload.id, )
            .then(response => {
                response.data.items = map(state, response.data.items);
                actions.cart.updated.dispatch(response.data);
                actions.cart.loading.toggle.dispatch();
            }).catch(console.log)
    }

    return next(action);
}

export default remoteItem;