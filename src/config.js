export default {
    api: {
        url: process.env.REACT_APP_API_URL
    },
    validator: {
        email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        plain: /^[a-zA-Z]+$/,
        number: /^[0-9]+$/
    }
}