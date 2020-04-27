import loading from '../../../src/middlewares/cart/loading'
import actions from '../../../src/actions';

describe('Cart Loading MiddleWare', () => {

    actions.cart.loading.hide.dispatch = jest.fn();
    actions.cart.loading.show.dispatch = jest.fn();

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
    const middleware = loading(store)(next);

    it('should call hide  dispatch', () => {

        store.getState.mockReturnValueOnce({...state});
        middleware({
            type: actions.cart.loading.toggle.type
        });

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(actions.cart.loading.hide.dispatch).toBeCalled();
    });

    it('should call show dispatch', () => {

        state.cart.loading = false
        store.getState.mockReturnValueOnce({...state});
        middleware({
            type: actions.cart.loading.toggle.type
        });

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(actions.cart.loading.show.dispatch).toBeCalled();
    });

});
