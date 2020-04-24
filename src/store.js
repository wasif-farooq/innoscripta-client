import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import reduxers from './reducers';
import middlewares from './middlewares';
import thunk from 'redux-thunk';

const create = (state, ) => {
    return createStore(
        combineReducers(reduxers),
        state,
        applyMiddleware(...[thunk, ...middlewares])
    )
};

export default create;