import create from '../utils/action-creator'
import {
    ADD_TO_CART,
    CART_TOGGLE_LOADING,
    CART_SHOW_LOADING,
    CART_HIDE_LOADING,
    UPDATE_CART,
    CART_UPDATED,
    UPDATE_CART_ITEM_QTY,
    CART_REMOVE_ITEM,
    TOGGLE_CART,
    CLEAR_CART,
    SHOW_CART,
    HIDE_CART,
    DO_CHECKOUT
} from "../constants";

export default {
    cart: {
        item: {
            add: create(ADD_TO_CART),
            remove: create(CART_REMOVE_ITEM),
            quantity: {
                update: create(UPDATE_CART_ITEM_QTY)
            }
        },
        loading: {
            show: create(CART_SHOW_LOADING),
            hide: create(CART_HIDE_LOADING),
            toggle: create(CART_TOGGLE_LOADING)
        },
        show: create(SHOW_CART),
        hide: create(HIDE_CART),
        toggle: create(TOGGLE_CART),
        update: create(UPDATE_CART),
        updated: create(CART_UPDATED),
        clear: create(CLEAR_CART),
        checkout: create(DO_CHECKOUT)
    }
}