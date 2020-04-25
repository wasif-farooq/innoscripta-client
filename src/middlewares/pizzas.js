import actions from '../actions';
import config from '../config';
import axios from 'axios';

const pizzas = store => next => action => {

    if (action.type === actions.pizza.get.all.start.type) {

        axios.get(config.api.url + '/pizzas')
            .then(response => {
                actions.pizza.get.all.end.dispatch(response.data)
            })
    }

    return next(action);

}

export default pizzas;