import actions from '../actions';

const init = {
    list: []
}

const pizzas = (state = init, action) => {
    switch (action.type) {
        case actions.pizza.get.all.end.type:
            return {
                ...state,
                list: [
                    ...state.list,
                    ...action.payload
                ]
            }
        default:
            return state;
    }
}

export default pizzas;