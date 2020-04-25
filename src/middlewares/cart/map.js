const map = async (state, data) => {
    data.items = data.items.map((item) => {
        item.name = item.pizza.name;
        return item;
    })
    return data;
}

export default map;