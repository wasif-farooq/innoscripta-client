import addToCart from './addToCart';
import {
    ADD_TO_CART,
    CART_TOGGLE_LOADING,
    CART_UPDATED,
    HIDE_CART,
    TOGGLE_CART,
    TOGGLE_NOTIFICATION
} from "../../actions";
import config from "../../config";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Add To Cart Middleware', () => {

    const state = {
        cart: {
            cart: ''
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
    };;
    const next = jest.fn();
    const middleware = addToCart(store)(next);

    it('should call store dispatch', () => {

        const items = [{
            id: 1,
            pizza_id: 1,
            name: 'pizza1',
            quantity: 1,
            cart_id: 1
        }];

        store.getState.mockReturnValueOnce({...state});
        map.mockReturnValueOnce(items)

        const response = {
            id: 1,
            total: 1,
            sub_total: 1,
            discount: 1,
            shipping_cost: 1,
            items: items
        }

        const action = {
            type: ADD_TO_CART
        };

        const a = mockAxios.onPost(config.api.url + '/cart').reply(200, {
            id: 1
        });

        mockAxios.onPost(config.api.url + '/cart/1/items').reply(200, response)

        middleware(action);
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

            expect(store.dispatch).toHaveBeenCalledWith({
                type: TOGGLE_NOTIFICATION,
                payload: {
                    type: 'success',
                    message: 'Item Added Succesfully'
                }
            });

            expect(store.dispatch).toHaveBeenCalledTimes(4);
        })

    });
});