import {
    PIZZAS_FETCHED
} from '../actions';

const init = {
    list: []
}

const pizzas = (state = init, action) => {
    console.log("action : ", action)
    switch (action.type) {
        case PIZZAS_FETCHED:
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