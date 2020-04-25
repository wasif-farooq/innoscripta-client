import general from './general';
import {HIDE_LOADING, SHOW_LOADING, TOGGLE_LOADING} from "../../actions";

describe('Genral MiddleWare', () => {

    const state = {
        general: {
            loading: true
        }
    };

    const store = {
        getState: jest.fn(),
        dispatch: jest.fn()
    };;
    const next = jest.fn();
    const middleware = general(store)(next);

    it('should call store dispatch', () => {

        store.getState.mockReturnValueOnce({...state});

        const action = {
            type: TOGGLE_LOADING
        };

        middleware(action);

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(store.dispatch).toBeCalledWith({type: HIDE_LOADING});
    });

    it('should call store dispatch', () => {

        store.getState.mockReturnValueOnce({
            ...state,
            general: {
                loading: false
            }
        });

        const action = {
            type: TOGGLE_LOADING
        };

        middleware(action);

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(store.dispatch).toBeCalledWith({type: SHOW_LOADING});
    });

});
