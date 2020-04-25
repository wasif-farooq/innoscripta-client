import actions from "../../actions";

const loading = store => next => action => {

    const state = store.getState();
    if (action.type === actions.cart.loading.toggle.type) {
        state.cart.loading ?
            actions.cart.loading.hide.dispatch():
            actions.cart.loading.show.dispatch();
    }

    return next(action);
}

export default loading;