import reducer from '../../src/reducers/general';
import {
    HIDE_LOADING,
    HIDE_NOTIFICATION,
    SHOW_LOADING,
    SHOW_NOTIFICATION
} from '../../src/constants'

describe('General Reducer', () => {

    it('should return default state', () => {
        const state = reducer({
            loading: true,
            notification: {
                type: '',
                message: ''
            }
        }, {
            type: ''
        });
        expect(state.loading).toBe(true);
        expect(state.notification.type).toBe('');
        expect(state.notification.message).toBe('');
    });

    it('should set loading state', () => {
        const state = reducer([], {
            type: SHOW_LOADING
        });
        expect(state.loading).toBe(true);
    });

    it('should set loading state', () => {
        const state = reducer([], {
            type: HIDE_LOADING
        });
        expect(state.loading).toBe(false);
    });

    it('should set notification state', () => {
        const state = reducer([], {
            type: SHOW_NOTIFICATION,
            payload: {
                type: 'success',
                message: 'message'
            }
        });
        expect(state.notification.type).toBe('success');
        expect(state.notification.message).toBe('message');
    });

    it('should reset notification state', () => {
        const state = reducer({
            type: '',
            message: ''
        }, {
            type: HIDE_NOTIFICATION,
        });
        expect(state.notification.type).toBe('');
        expect(state.notification.message).toBe('');
    });

});