import checkout from './checkout'
import config from "../config";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {
    CART_TOGGLE_LOADING,
    CART_UPDATED,
    CLEAR_CART,
    DO_CHECKOUT,
    TOGGLE_LOADING,
    TOGGLE_NOTIFICATION
} from "../actions";

describe('Checkout Middleware', () => {

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
    const middleware = checkout(store)(next);

    it('should checkout successfully to 3', () => {

        store.getState.mockReturnValueOnce({...state});
        const response = {
            status: 'ok'
        };

        const action = {
            type: DO_CHECKOUT,
            payload: {
                id: 1
            }
        };
        middleware(action);

        mockAxios.onPost(config.api.url + '/cart/1/checkout').reply(200, response)
        expect(next).toBeCalled();

        setTimeout(() => {

            expect(store.dispatch).toHaveBeenCalledWith({
                type: CART_TOGGLE_LOADING
            });

            expect(store.dispatch).toBeCalledWith({
                type: TOGGLE_NOTIFICATION,
                payload: {
                    type: 'success',
                    message: 'Successfully Processed.'
                }
            });

            expect(store.dispatch).toHaveBeenCalledWith({
                type: CLEAR_CART,
            });

            expect(store.dispatch).toHaveBeenCalledWith({
                type: TOGGLE_LOADING,
            });

            expect(store.dispatch).toHaveBeenCalledTimes(4);
        })


    })

});