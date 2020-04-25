import actions from "../../actions";

const noticiation = store => next => action => {
    const state = store.getState();
    const { type, payload } = action;

    if (type === actions.general.notification.toggle.type) {

        if (state.general.notification.type) {
            actions.general.notification.hide.dispatch();
        }

        if (!state.general.notification.type) {
            actions.general.notification.show.dispatch();
            setTimeout(() => {
                actions.general.notification.hide.dispatch();
            }, 1000)
        }

    }

    return next(action);
}

export default noticiation;