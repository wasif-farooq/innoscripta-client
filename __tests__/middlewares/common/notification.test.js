import notification from '../../../src/middlewares/common/notification';
import actions from '../../../src/actions';

describe('Notification MiddleWare', () => {

    actions.general.notification.hide.dispatch = jest.fn();
    actions.general.notification.show.dispatch = jest.fn();

    const state = {
        general: {
            notification: {
                type: 'success',
                message: 'success'
            }
        }
    };

    const store = {
        getState: jest.fn(),
        dispatch: jest.fn()
    };;
    const next = jest.fn();
    const middleware = notification(store)(next);

    it('should call hide  dispatch', () => {

        store.getState.mockReturnValueOnce({...state});
        middleware({
            type: actions.general.notification.toggle.type
        });

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(actions.general.notification.hide.dispatch).toBeCalled();
    });

    it('should call show dispatch', () => {

        state.general.notification = {
            type: '',
            message: ''
        };
        store.getState.mockReturnValueOnce({...state});
        middleware({
            type: actions.general.notification.toggle.type
        });

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(actions.general.notification.show.dispatch).toBeCalled();
    });

});
