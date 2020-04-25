import updateCartItemQty from './updateCartItemQty'
import config from "../../config";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import addToCart from "./addToCart";
import removeItem from "./removeItem";
import {CART_REMOVE_ITEM, CART_TOGGLE_LOADING, CART_UPDATED} from "../../actions";

describe('Update Item Quantity Middleware', () => {

    const state = {
        cart: {
            id: 1,
            total: 1,
            sub_total: 1,
            discount: 1,
            shipping_cost: 1,
            items: [{
                id: 1,
                pizza_id: 1,
                name: 'pizza1',
                quantity: 1,
                cart_id: 1
            }]
        },
        pizzas: {
            list: [{
                id: 1,
                name: 'pizza1'
            }]
        }
    };

    const map = jest.fn();

    const mockAxios = new MockAdapter(axios);

    const store = {
        getState: jest.fn(),
        dispatch: jest.fn()
    };
    ;
    const next = jest.fn();
    const middleware = updateCartItemQty(store)(next);

    it('should update item quantity to 3', () => {

        store.getState.mockReturnValueOnce({...state});

        const response = {...state.cart}
        response.items[0].quantity = 3;

        const action = {
            type: CART_TOGGLE_LOADING,
            payload: {
                id: 1,
                quantity: 3
            }
        };
        middleware(action);

        mockAxios.onPatch(config.api.url + '/cart/1/items/1').reply(200, response)
        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();

        setTimeout(() => {

            expect(store.dispatch).toHaveBeenCalledWith({
                type: CART_TOGGLE_LOADING
            });

            expect(store.dispatch).toBeCalledWith({
                type: CART_UPDATED,
                payload: response
            });

            expect(store.dispatch).toHaveBeenCalledWith({
                type: CART_TOGGLE_LOADING,
            });

            expect(store.dispatch).toHaveBeenCalledTimes(3);
        })

    });

});