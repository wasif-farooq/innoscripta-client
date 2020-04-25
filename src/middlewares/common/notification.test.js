import notification from './notification';

import {
    HIDE_NOTIFICATION,
    SHOW_NOTIFICATION,
    TOGGLE_NOTIFICATION
} from "../../actions";

describe('Genral MiddleWare', () => {

    const state = {
        general: {
            loading: true,
            notification: {
                type: '',
                message: ''
            }
        }
    };

    const store = {
        getState: jest.fn(),
        dispatch: jest.fn()
    };;
    const next = jest.fn();
    const middleware = notification(store)(next);

    it('should call store dispatch', () => {

        store.getState.mockReturnValueOnce({...state});

        const action = {
            type: TOGGLE_NOTIFICATION
        };

        middleware(action);

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(store.dispatch).toBeCalledWith({type: SHOW_NOTIFICATION});
    });

    it('should call store dispatch', () => {

        store.getState.mockReturnValueOnce({
            ...state,
            general: {
                loading: false,
                notification: {
                    type: 'success',
                    message: 'success'
                }
            }
        });

        const action = {
            type: TOGGLE_NOTIFICATION
        };

        middleware(action);

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(store.dispatch).toBeCalledWith({type: HIDE_NOTIFICATION});
    });

});
