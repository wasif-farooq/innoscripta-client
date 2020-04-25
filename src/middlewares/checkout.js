import actions from "../actions";
import config from '../config';
import axios from 'axios';

const checkout = store => next => action => {

    const { type, payload } = action;

    if (type === actions.cart.checkout.type) {
        actions.general.loading.toggle.dispatch()

        axios.post(config.api.url + '/cart/' + payload.id + '/checkout', payload.values)
            .then(response => {
                actions.general.notification.toggle.dispatch({
                    type: 'success',
                    message: 'Order placed successfully'
                })

                actions.cart.clear.dispatch();
                actions.general.loading.toggle.dispatch()
            })
            .catch(err => actions.general.loading.toggle.dispatch())
    }

    return next(action);
}

export default checkout;