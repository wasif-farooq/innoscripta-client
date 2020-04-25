import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import reduxers from './reducers';
import middlewares from './middlewares';
import thunk from 'redux-thunk';

let store = {};
const create = (state, ) => {
    store = createStore(
        combineReducers(reduxers),
        state,
        applyMiddleware(...[thunk, ...middlewares])
    )
    return store;
};


export default create;
export { store }