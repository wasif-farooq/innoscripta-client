import actions from "../actions";
import service from '../services/cart';

const checkout = store => next => action => {

    const state = store.getState();
    const { type, payload } = action;

    if (type === actions.cart.checkout.type) {
        actions.general.loading.toggle.dispatch()

        service.checkout(state.cart.it)
            .then(async () => actions.cart.loading.toggle.dispatch())
            .then(async () => actions.general.notification.toggle.dispatch({
                type: 'success',
                message: 'Item Order placed successfully'
            }))
            .catch(async () => actions.cart.loading.toggle.dispatch())
            .then(() => actions.general.notification.toggle.dispatch({
                type: 'warning',
                message: 'There is some error in process please try again later'
            }))
    }

    return next(action);
}

export default checkout;