import addToCart from '../../../src/middlewares/cart/add-to-cart';
import actions from '../../../src/actions';
import service from "../../../src/services/cart";

describe('Add To Cart Middleware', () => {

    actions.cart.loading.toggle.dispatch = jest.fn();
    actions.cart.updated.dispatch = jest.fn();
    actions.general.notification.toggle.dispatch = jest .fn();
    service.generate = jest.fn();
    service.addToCart = jest.fn();

    const state = {
        cart: {
            id: ''
        },
    };

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
            shipping_cost: 1,
            items: items
        }

        store.getState.mockReturnValueOnce({...state});
        service.generate.mockResolvedValue(1);
        service.addToCart.mockResolvedValue(response)

        const action = {
            type: actions.cart.item.add.type
        };

        middleware(action);
        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        setTimeout(() => {

            expect(actions.cart.loading.toggle.dispatch).toBeCalled();
            expect(service.generate).toBeCalled();
            expect(service.addToCart).toBeCalled();
            expect(actions.cart.updated.dispatch).toBeCalled();
            expect(actions.cart.loading.toggle.dispatch).toBeCalled();
            expect(actions.general.notification.toggle.dispatch).toBeCalled();
        })

    });
});