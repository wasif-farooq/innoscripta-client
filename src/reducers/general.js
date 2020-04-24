import {
    SHOW_LOADING,
    HIDE_LOADING,
    SHOW_NOTIFICATION,
    HIDE_NOTIFICATION
} from '../actions';

const init = {
    loading: true,
    notification: {
        type: '',
        message: ''
    }
}

const general = (state = init, action) => {
    console.log("state : ", state);
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                loading: true
            }
        case HIDE_LOADING:
            return {
                ...state,
                loading: false
            }
        case SHOW_NOTIFICATION:
            return {
                ...state,
                notification: {...action.payload}
            }
        case HIDE_NOTIFICATION:
            return {
                ...state,
                notification: {...init.notification}
            }
        default:
            return state
    }
}

export default general;