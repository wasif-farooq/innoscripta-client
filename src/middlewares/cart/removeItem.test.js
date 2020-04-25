import removeItem from './removeItem';
import config from "../../config";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import addToCart from "./addToCart";
import {ADD_TO_CART, CART_REMOVE_ITEM, CART_TOGGLE_LOADING, CART_UPDATED, TOGGLE_NOTIFICATION} from "../../actions";

describe('Remove Item Middleware', () => {

    const state = {
        cart: {
            id: 1
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
    const middleware = removeItem(store)(next);

    it('should call dispatch 3 times and resolve the data', () => {

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
            type: CART_REMOVE_ITEM,
            payload: {
                id: 1
            }
        };
        middleware(action);

        mockAxios.onDelete(config.api.url + '/cart/1/items/1').reply(200, response)

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