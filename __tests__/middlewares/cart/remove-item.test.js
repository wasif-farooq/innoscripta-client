import removeItem from '../../../src/middlewares/cart/remove-item';
import actions from '../../../src/actions';
import service from "../../../src/services/cart";

describe('Remove Item Middleware', () => {

    actions.cart.loading.toggle.dispatch = jest.fn();
    actions.cart.updated.dispatch = jest.fn();
    service.removeItem = jest.fn();

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
    const middleware = removeItem(store)(next);

    it('should call store dispatch', () => {

        const response = {
            id: 1,
            total: 1,
            sub_total: 1,
            discount: 1,
            shipping_cost: 1,
            items: []
        }

        store.getState.mockReturnValueOnce({...state});
        service.removeItem.mockResolvedValue(response)

        const action = {
            type: actions.cart.item.remove.type,
            payload: {
                id: 1
            }
        };

        middleware(action);
        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        setTimeout(() => {

            expect(actions.cart.loading.toggle.dispatch).toBeCalled();
            expect(service.removeItem()).toBeCalled();
            expect(actions.cart.updated.dispatch).toBeCalled();
            expect(actions.cart.loading.toggle.dispatch).toBeCalled();
        })

    });
});