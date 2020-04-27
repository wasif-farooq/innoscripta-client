import general from '../../../src/middlewares/common/general'
import actions from '../../../src/actions';

describe('Genral MiddleWare', () => {

    actions.general.loading.hide.dispatch = jest.fn();
    actions.general.loading.show.dispatch = jest.fn();

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

    it('should call hide  dispatch', () => {

        store.getState.mockReturnValueOnce({...state});
        middleware({
            type: actions.general.loading.toggle.type
        });

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(actions.general.loading.hide.dispatch).toBeCalled();
    });

    it('should call show dispatch', () => {

        state.general.loading = false
        store.getState.mockReturnValueOnce({...state});
        middleware({
            type: actions.general.loading.toggle.type
        });

        expect(store.getState).toBeCalled();
        expect(next).toBeCalled();
        expect(actions.general.loading.show.dispatch).toBeCalled();
    });

});
