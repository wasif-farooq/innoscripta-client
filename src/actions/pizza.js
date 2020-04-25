import create from '../utils/action-creator'
import {FETCH_PIZZAS, PIZZAS_FETCHED} from "../constants";

export default {
    pizza: {
        get: {
            all: {
                start: create(FETCH_PIZZAS),
                end: create(PIZZAS_FETCHED)
            }

        }
    }
}