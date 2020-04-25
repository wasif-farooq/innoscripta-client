import actions from "../../actions";
import service from '../../services/cart';
import map from './map';


const get = store => next => action => {

    const state = store.getState();
    const { type, payload } = action;

    if (type === actions.cart.get.type) {
        actions.cart.loading.toggle.dispatch();

        service.get(payload)
            .then(async data => map(state, data))
            .then(async data => actions.cart.updated.dispatch(data))
            .then(async () => actions.cart.loading.toggle.dispatch())
            .catch(async err => err)
            .then(err => {
                if (err) {
                    actions.cart.loading.toggle.dispatch();
                }
            });
    }

    return next(action);
}

export default get;