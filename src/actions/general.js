import create from '../utils/action-creator'
import {
    HIDE_LOADING,
    HIDE_NOTIFICATION,
    SHOW_LOADING,
    SHOW_NOTIFICATION,
    TOGGLE_LOADING,
    TOGGLE_NOTIFICATION
} from "../constants";

export default {
    general: {
        loading: {
            show: create(SHOW_LOADING),
            hide: create(HIDE_LOADING),
            toggle: create(TOGGLE_LOADING)
        },
        notification: {
            show: create(SHOW_NOTIFICATION),
            hide: create(HIDE_NOTIFICATION),
            toggle: create(TOGGLE_NOTIFICATION)
        }
    }
}