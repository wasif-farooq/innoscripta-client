import { store } from '../store';

const create = (type) => {
    return {
        type,
        dispatch: (payload) => {
            store.dispatch({
                type,
                payload
            })
        }
    }
}

export default create;