import actions from '../actions';

const init = {
    loading: true,
    notification: {
        type: '',
        message: ''
    }
}

const general = (state = init, action) => {
    switch (action.type) {
        case actions.general.loading.show.type:
            return {
                ...state,
                loading: true
            }
        case actions.general.loading.hide.type:
            return {
                ...state,
                loading: false
            }
        case actions.general.notification.show.type:
            return {
                ...state,
                notification: {...action.payload}
            }
        case actions.general.notification.hide.type:
            return {
                ...state,
                notification: {...init.notification}
            }
        default:
            return state
    }
}

export default general;