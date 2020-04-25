import actions from "../../actions";
import service from '../../services/cart';
import map from './map';

const getCart = async (state) => {
    return state.cart.id > 0 ? state.cart.id: await service.generate();
}

const addToCart = store => next => action => {

    const state = store.getState();
    const { type, payload } = action;

    if (type === actions.cart.item.add.type) {
        actions.cart.loading.toggle.dispatch();

        getCart(state).then(id => service.addToCart(id, payload))
            .then(async data => map(state, data))
            .then(async data => actions.cart.updated.dispatch(data))
            .then(async () => actions.cart.loading.toggle.dispatch())
            .then(async () => actions.general.notification.toggle.dispatch({
                type: 'success',
                message: 'Item Added Succesfully'
            }))
            .catch(async () => actions.cart.loading.toggle.dispatch())
            .then(() => actions.general.notification.toggle.dispatch({
                type: 'warning',
                message: 'There is some error in process please try again later'
            }))
    }

    return next(action);
}

export default addToCart;