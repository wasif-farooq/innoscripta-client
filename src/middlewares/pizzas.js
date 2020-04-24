import {
    FETCH_PIZZAS,
    PIZZAS_FETCHED
} from '../actions';
import config from '../config';
import axios from 'axios';

const pizzas = store => next => action => {

    if (action.type === FETCH_PIZZAS) {

        axios.get(config.api.url + '/pizzas')
            .then(response => {
                store.dispatch({
                    type: PIZZAS_FETCHED,
                    payload: response.data
                })
            })
    }

    return next(action);

}

export default pizzas;