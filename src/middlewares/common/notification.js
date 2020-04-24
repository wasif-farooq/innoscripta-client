import {
    TOGGLE_NOTIFICATION,
    SHOW_NOTIFICATION,
    HIDE_NOTIFICATION
} from "../../actions";

const noticiation = store => next => action => {
    const state = store.getState();
    const { type, payload } = action;

    if (type === TOGGLE_NOTIFICATION) {

        if (state.general.notification.type) {
            store.dispatch({type: HIDE_NOTIFICATION})
        }

        if (!state.general.notification.type) {
            store.dispatch({type: SHOW_NOTIFICATION, payload})
            setTimeout(() => {
                store.dispatch({type: HIDE_NOTIFICATION})
            }, 1000)
        }

    }

    return next(action);
}

export default noticiation;