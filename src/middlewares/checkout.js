import actions from "../actions";
import service from '../services/cart';

const checkout = store => next => action => {

    const state = store.getState();
    const { type } = action;

    if (type === actions.cart.checkout.type) {
        actions.general.loading.toggle.dispatch()

        service.checkout(state.cart.id)
            .then(async () => actions.cart.loading.toggle.dispatch())
            .then(async () => localStorage.clear())
            .then(async () => window.location.replace('/thank-you'))
            .catch(async err => err)
            .then(err => {
                console.log(err)
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