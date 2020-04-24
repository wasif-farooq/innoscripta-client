import {
    SHOW_LOADING,
    HIDE_LOADING,
    TOGGLE_LOADING
} from '../../actions';

const general = store => next => action => {

    const loading = store.getState().general.loading;
    if (action.type === TOGGLE_LOADING) {
        loading ?
            store.dispatch({type: HIDE_LOADING}):
            store.dispatch({type: SHOW_LOADING});
    }

    return next(action);
}

export default general;