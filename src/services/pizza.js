import http from '../core/http';
import config from '../config';

class PizzaService {

    static instance;

    constructor(config) {
        if (!PizzaService.instance) {
            PizzaService.instance = this;
        }

        this.uri = config.api.url + '/pizzas';
        return PizzaService.instance;
    }

    getPizzas = async () => {
        try {
            const response = await http.get(this.uri);
            return response.data;
        } catch (error) {
            throw (error.response || error.message);
        }
    }
}

const instance = new PizzaService(config);
export default instance;