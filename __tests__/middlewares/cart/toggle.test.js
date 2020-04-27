import toggle from '../../../src/middlewares/cart/toggle'
import actions from '../../../src/actions';

describe('Cart Loading MiddleWare', () => {

    actions.cart.hide.dispatch = jest.fn();
    actions.cart.show.dispatch = jest.fn();

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

    it('should call hide  dispatch', () => {

        store.getState.mockReturnValueOnce({...state});
        middleware({
            type: actions.cart.toggle.type
        });

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(actions.cart.hide.dispatch).toBeCalled();
    });

    it('should call show dispatch', () => {

        state.cart.show = false
        store.getState.mockReturnValueOnce({...state});
        middleware({
            type: actions.cart.toggle.type
        });

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(actions.cart.show.dispatch).toBeCalled();
    });

});
