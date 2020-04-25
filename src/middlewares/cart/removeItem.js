import actions from "../../actions";
import service from '../../services/cart';
import map from './map';

const remoteItem = store => next => action => {

    const state = store.getState();
    const { type, payload } = action;

    if (type === actions.cart.item.remove.type) {
        actions.cart.loading.toggle.dispatch();

        service.removeItem(state.cart.id, payload.id)
            .then(async data => map(state, data))
            .then(async data => actions.cart.updated.dispatch(data))
            .then(async () => actions.cart.loading.toggle.dispatch())
            .catch(async () => actions.cart.loading.toggle.dispatch())
            .then(() => actions.general.notification.toggle.dispatch({
                type: 'warning',
                message: 'There is some error in process please try again later'
            }));
    }

    return next(action);
}

export default remoteItem;