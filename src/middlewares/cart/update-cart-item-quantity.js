import actions from "../../actions";
import service from '../../services/cart';
import map from './map';

const updateCartItemQty = store => next => action => {

    const state = store.getState();
    const { type, payload } = action;
    if (type === actions.cart.item.quantity.update.type) {
        actions.cart.loading.toggle.dispatch();

        const { id, ...data } = payload;
        service.updateQuantity(state.cart.id, id, data)
            .then(async data => map(state, data))
            .then(async () => actions.cart.updated.dispatch(data))
            .then(async () => actions.cart.loading.toggle.dispatch())
            .catch(async err => err)
            .then(err => {
                if (err) {
                    actions.cart.loading.toggle.dispatch();
                    actions.general.notification.toggle.dispatch({
                        type: 'warning',
                        message: 'There is some error in process please try again later'
                    })
                }
            })

    }

    return next(action);
}

export default updateCartItemQty;