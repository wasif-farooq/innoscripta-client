import actions from '../actions';
import service from '../services/pizza';

const pizzas = store => next => action => {

    if (action.type === actions.pizza.get.all.start.type) {
        service.getPizzas().then(actions.pizza.get.all.end.dispatch);
    }

    return next(action);

}

export default pizzas;