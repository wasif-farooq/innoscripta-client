const map = async (state, data) => {
    data.items = data.items.map((item) => {
        item.pizza = item.pizza.name;
        return item;
    })
    return data;
}

export default map;