import reducer from './cart';
import {CART_HIDE_LOADING, CART_SHOW_LOADING, CART_UPDATED, CLEAR_CART, HIDE_CART, SHOW_CART} from "../actions";

describe('Cart Reducer', () => {

    const init = {
        loading: false,
        show: false,
        id: '',
        sub_total: 0,
        discount: 0,
        shipping_cost: 0,
        total: 0,
        items: []
    }

    it('should return default state', () => {
        const state = reducer(init, { type: '' });

        expect(state.loading).toEqual(false);
        expect(state.show).toEqual(false);
        expect(state.id).toEqual('');
        expect(state.sub_total).toEqual(0);
        expect(state.discount).toEqual(0);
        expect(state.shipping_cost).toEqual(0);
        expect(state.total).toEqual(0);
        expect(state.items).toEqual([]);

    });

    it('should reset cart state', () => {
        const state = reducer(init, {
            type:  CLEAR_CART
        });

        expect(state.loading).toEqual(false);
        expect(state.show).toEqual(false);
        expect(state.id).toEqual('');
        expect(state.sub_total).toEqual(0);
        expect(state.discount).toEqual(0);
        expect(state.shipping_cost).toEqual(0);
        expect(state.total).toEqual(0);
        expect(state.items).toEqual([]);

    });

    it('should set loading state', () => {
        const payload = {

        }
        const state = reducer(init, {
            type: CART_SHOW_LOADING,
            payload
        });

        expect(state.loading).toEqual(true);
    });

    it('should reset loading state', () => {
        const payload = {

        }
        const state = reducer(init, {
            type: CART_HIDE_LOADING,
            payload
        });

        expect(state.loading).toEqual(false);
    });

    it('should set show  state', () => {
        const payload = {

        }
        const state = reducer(init, {
            type: SHOW_CART,
            payload
        });

        expect(state.show).toEqual(true);
    });

    it('should reset show  state', () => {
        const payload = {

        }
        const state = reducer(init, {
            type: HIDE_CART,
            payload
        });

        expect(state.show).toEqual(false);
    });

    it('should set cart state', () => {
        const payload = {
            id: 1,
            sub_total: 1,
            total: 1,
            discount: 1,
            shipping_cost: 1,
            items: [{
                id: 1,
                cart_id: 1,
                pizza_id: 1,
                quantity: 1,
                price: 1
            }]
        }

        const state = reducer(init, {
            type:  CART_UPDATED,
            payload
        });


        expect(state.sub_total).toEqual(1);
        expect(state.total).toEqual(1);
        expect(state.discount).toEqual(1);
        expect(state.shipping_cost).toEqual(1);
        expect(state.items.length).toEqual(1);
        expect(state.items[0].id).toEqual(1);
        expect(state.items[0].cart_id).toEqual(1);
        expect(state.items[0].pizza_id).toEqual(1);
        expect(state.items[0].quantity).toEqual(1);
        expect(state.items[0].price).toEqual(1);
    });
});