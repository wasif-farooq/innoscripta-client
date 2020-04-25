import axios from "axios";
import { tokenInterceptor, successInterceptor, errorInterceptor } from "./interceptor";

let instance = null;

class Http {

    constructor(config = null) {
        if (!instance) {
            instance = axios.create(config);
            instance.interceptors.request.use(tokenInterceptor);
            instance.interceptors.response.use(
                response => {
                    successInterceptor(response);
                    return response;
                },
                error => {
                    errorInterceptor(error);
                    return Promise.reject({ ...error });
                }
            );
        }

        return instance;
    }

    get(url, conf = {}) {
        return instance.get(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    delete(url, conf = {}) {
        return instance.delete(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    head(url, conf = {}) {
        return instance.head(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    options(url, conf = {}) {
        return instance.options(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    post(url, data = {}, conf = {}) {
        return instance.post(url, data, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    put(url, data = {}, conf = {}) {
        return instance.put(url, data, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    patch(url, data = {}, conf = {}) {
        return instance.patch(url, data, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }
}

export default new Http();