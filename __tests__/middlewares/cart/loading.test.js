import cartLoading from './loading';

import {
    CART_TOGGLE_LOADING,
    CART_SHOW_LOADING,
    CART_HIDE_LOADING
} from "../../actions";

describe('Genral MiddleWare', () => {

    const state = {
        cart: {
            loading: true
        }
    };

    const store = {
        getState: jest.fn(),
        dispatch: jest.fn()
    };;
    const next = jest.fn();
    const middleware = cartLoading(store)(next);

    it('should call store dispatch', () => {

        store.getState.mockReturnValueOnce({...state});

        const action = {
            type: CART_TOGGLE_LOADING
        };

        middleware(action);

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(store.dispatch).toBeCalledWith({type: CART_HIDE_LOADING});
    });

    it('should call store dispatch', () => {

        store.getState.mockReturnValueOnce({
            ...state,
            cart: {
                loading: false
            }
        });

        const action = {
            type: CART_TOGGLE_LOADING
        };

        middleware(action);

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(store.dispatch).toBeCalledWith({type: CART_SHOW_LOADING});
    });

});
