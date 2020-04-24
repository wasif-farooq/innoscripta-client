import {
    DO_CHECKOUT,
    TOGGLE_LOADING,
    CLEAR_CART, TOGGLE_NOTIFICATION
} from "../actions";
import config from '../config';
import axios from 'axios';

const checkout = store => next => action => {

    const { type, payload } = action;

    if (type === DO_CHECKOUT) {
        store.dispatch({type: TOGGLE_LOADING});

        axios.post(config.api.url + '/cart/' + payload.id + '/checkout', payload.values)
            .then(response => {
                store.dispatch({
                    type: TOGGLE_NOTIFICATION,
                    payload: {
                        type: 'success',
                        message: 'Successfully Processed.'
                    }
                });
                store.dispatch({type: CLEAR_CART})
                store.dispatch({type: TOGGLE_LOADING});
            })
            .catch(err => store.dispatch({type: TOGGLE_LOADING}))
    }

    return next(action);
}

export default checkout;