import reducer from '../../src/reducers/pizzas';
import {
    PIZZAS_FETCHED
} from '../../src/constants'


describe('Pizza Reducer', () => {

    const init = {
        list: []
    }

    it('should return default state', () => {
        const state = reducer(init, {
            type: ''
        });
        expect(state.list).toEqual([]);
    });

    it('should set list state', () => {
        const payload = [{
            id: 1,
            name: 'test',
            description: 'test',
            thumbnail: 'test',
            price: 1
        }];
        const state = reducer(init, {
            type: PIZZAS_FETCHED,
            payload
        });

        expect(state.list.length).toEqual(1);
        expect(state.list[0].id).toEqual(1);
        expect(state.list[0].name).toEqual('test');
        expect(state.list[0].description).toEqual('test');
        expect(state.list[0].thumbnail).toEqual('test');
        expect(state.list[0].price).toEqual(1);
    });

});