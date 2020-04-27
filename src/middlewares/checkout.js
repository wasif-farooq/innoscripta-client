import actions from "../actions";
import service from '../services/cart';
import map from "./cart/map";

const checkout = store => next => action => {

    const state = store.getState();
    const { type } = action;

    if (type === actions.cart.checkout.type) {
        actions.general.loading.toggle.dispatch()

        service.checkout(state.cart.id)
            .then(async data => map(state, data))
            .then(async data => actions.cart.updated.dispatch(data))
            .then(async () => actions.general.loading.toggle.dispatch())
            .catch(async err => err)
            .then(err => {
                if (err) {
                    actions.cart.loading.toggle.dispatch();
                    actions.general.notification.toggle.dispatch({
                        type: 'warning',
                        message: 'There is some error in process please try again later'
                    })
                }
            });
    }

    return next(action);
}

export default checkout;