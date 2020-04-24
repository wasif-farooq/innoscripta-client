import {
    CART_SHOW_LOADING,
    CART_HIDE_LOADING,
    CART_UPDATED,
    SHOW_CART,
    HIDE_CART,
    CLEAR_CART
} from '../actions';
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
        case CART_SHOW_LOADING:
            return {
                ...state,
                loading: true
            }
        case CART_HIDE_LOADING:
            return {
                ...state,
                loading: false
            }
        case SHOW_CART:
            return {
                ...state,
                show: true
            }
        case HIDE_CART:
            return {
                ...state,
                show: false
            }
        case CART_UPDATED:
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
        case CLEAR_CART:
            return init;
        default:
            return state;
    }
}

export default cart;