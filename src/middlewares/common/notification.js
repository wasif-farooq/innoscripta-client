import actions from "../../actions";

const noticiation = store => next => action => {
    const state = store.getState();
    const { type, payload } = action;

    if (type === actions.general.notification.toggle.type) {

        if (state.general.notification.type) {
            actions.general.notification.hide.dispatch();
        } else {
            actions.general.notification.show.dispatch(payload);
            setTimeout(() => {
                actions.general.notification.hide.dispatch();
            }, 2000)
        }

    }

    return next(action);
}

export default noticiation;