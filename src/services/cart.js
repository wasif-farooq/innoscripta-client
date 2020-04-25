import http from '../core/http';
import config from '../config';


class CartService {

    static instance;

    constructor(config) {
        if (!CartService.instance) {
            CartService.instance = this;
        }

        this.uri = config.api.url + '/cart';
        return CartService.instance;
    }

    get = async (id) => {
        try {
            const response = await http.get(`${this.uri}/${id}`);
            return response.data;
        } catch (error) {
            throw (error.response || error.message);
        }
    }

    generate = async () => {
        try {
            const response = await http.post(`${this.uri}`);
            return response.data.id;
        } catch (error) {
            throw (error.response || error.message);
        }
    }

    addToCart = async (id, data) => {
        try {
            const response = await http.post(`${this.uri}/${id}/items`, data);
            return response.data;
        } catch (error) {
            throw (error.response || error.message);
        }
    }

    updateQuantity = async (id, item, data) => {
        try {
            const response = await http.post(`${this.uri}/${id}/items/${item}`, data);
            return response.data;
        } catch (error) {
            throw (error.response || error.message);
        }
    }

    removeItem = async (id, item) => {
        try {
            const response = await http.delete(`${this.uri}/${id}/items/${item}`);
            return response.data;
        } catch (error) {
            throw (error.response || error.message);
        }
    }

    checkout = async (id) => {
        try {
            const response = await http.post(`${this.uri}/${id}/checkout`);
            return response.data;
        } catch (error) {
            throw (error.response || error.message);
        }
    }
}

const instance = new CartService(config);
Object.freeze(instance);

export default instance;