const map = (state, items) => {
    return items.map((item) => {
        state.pizzas.list.some((pizza) => {
            if (pizza.id === item.pizza_id) {
                item.name = pizza.name
                return true;
            }
        })
        return item;
    })
}

export default map;