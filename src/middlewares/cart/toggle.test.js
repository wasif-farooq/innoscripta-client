import toggle from './toggle';

import {
    HIDE_CART,
    SHOW_CART,
    TOGGLE_CART
} from "../../actions";

describe('Genral MiddleWare', () => {

    const state = {
        cart: {
            show: true
        }
    };

    const store = {
        getState: jest.fn(),
        dispatch: jest.fn()
    };;
    const next = jest.fn();
    const middleware = toggle(store)(next);

    it('should call store dispatch', () => {

        store.getState.mockReturnValueOnce({...state});

        const action = {
            type: TOGGLE_CART
        };

        middleware(action);

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(store.dispatch).toBeCalledWith({type: HIDE_CART});
    });

    it('should call store dispatch', () => {

        store.getState.mockReturnValueOnce({
            ...state,
            cart: {
                show: false
            }
        });

        const action = {
            type: TOGGLE_CART
        };

        middleware(action);

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(store.dispatch).toBeCalledWith({type: SHOW_CART});
    });

});
