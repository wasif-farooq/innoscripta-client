import actions from '../actions';
const init = {
    loading: false,
    show: false,
    id: '',
    sub_total: 0,
    discount: 0,
    shipping_cost: 0,
    total: 0,
    items: []
}

const cart = (state = init, action) => {
    switch (action.type) {
        case actions.cart.loading.show.type:
            return {
                ...state,
                loading: true
            }
        case actions.cart.loading.hide.type:
            return {
                ...state,
                loading: false
            }
        case actions.cart.show.type:
            return {
                ...state,
                show: true
            }
        case actions.cart.hide.type:
            return {
                ...state,
                show: false
            }
        case actions.cart.updated.type:
            return {
                ...state,
                id: action.payload.id,
                sub_total: action.payload.sub_total,
                total: action.payload.total,
                discount: action.payload.discount,
                shipping_cost: action.payload.shipping_cost,
                items: [
                    ...action.payload.items
                ]
            }
        case actions.cart.clear.type:
            return init;
        default:
            return state;
    }
}

export default cart;