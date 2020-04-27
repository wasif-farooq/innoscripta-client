import checkout from '../../src/middlewares/checkout';
import actions from '../../src/actions';
import service from "../../src/services/cart";

describe('Checkout Middleware', () => {

    actions.general.loading.toggle.dispatch = jest.fn();
    actions.cart.updated.dispatch = jest.fn();
    service.checkout = jest.fn();

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
                cart_id: 1,
                pizza: {
                    name: 'pizza1'
                }
            }]
        },
    };

    const store = {
        getState: jest.fn(),
        dispatch: jest.fn()
    };;
    const next = jest.fn();
    const middleware = checkout(store)(next);

    it('should call store dispatch', () => {

        const items = [{
            id: 1,
            pizza_id: 1,
            name: 'pizza1',
            quantity: 2,
            cart_id: 1,
            pizza: {
                name: 'pizza1'
            }
        }];

        const response = {
            id: 1,
            total: 1,
            sub_total: 1,
            discount: 1,
            completed: true,
            shipping_cost: 1,
            items: items
        }

        store.getState.mockReturnValueOnce({...state});
        service.checkout.mockResolvedValue(response)

        const action = {
            type: actions.cart.checkout.type,
        };

        middleware(action);
        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();

        setTimeout(() => {

            expect(actions.general.loading.toggle.dispatch).toBeCalled();
            expect(service.checkout).toBeCalled();
            expect(actions.cart.updated.dispatch).toBeCalled();
            expect(actions.general.loading.toggle.dispatch).toBeCalled();
        })

    });
});