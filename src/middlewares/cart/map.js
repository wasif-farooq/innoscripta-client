const map = async (state, data) => {
    data.items = data.items.map((item) => {
        state.pizzas.list.some((pizza) => {
            if (pizza.id === item.pizza_id) {
                item.name = pizza.name
                return true;
            }
        })
        return item;
    })
    return data;
}

export default map;