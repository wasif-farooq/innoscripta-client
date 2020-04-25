import actions from "../../actions";

const toggle = store => next => action => {

    const state = store.getState();
    if (action.type === actions.cart.toggle.type) {
        state.cart.show ?
            actions.cart.hide.dispatch():
            actions.cart.show.dispatch();
    }

    return next(action);
}

export default toggle;