import actions from '../../actions';

const general = store => next => action => {

    const loading = store.getState().general.loading;
    if (action.type === actions.general.loading.toggle.type) {
        loading ?
            actions.general.loading.hide.dispatch():
            actions.general.loading.show.dispatch();
    }

    return next(action);
}

export default general;