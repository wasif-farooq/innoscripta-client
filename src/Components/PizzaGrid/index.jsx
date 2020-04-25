import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Item from './Item';
import { useSelector } from "react-redux";
import actions from '../../actions';

const PizzaGrid = () => {

    const pizzas = useSelector(state => state.pizzas.list)

    useEffect(() => {
        actions.pizza.get.all.start.dispatch();
    }, [])

    const onAdd = id => e => {
        actions.cart.item.add.dispatch({
            product_id: id,
            quantity: 1
        });
    }

    return (
        <Row>
            {pizzas.map((item) => {
                return (
                    <Col sm={4} key={item.id}>
                        <Item {...item} onAdd={onAdd} />
                    </Col>
                )
            })}
        </Row>
    )
}

PizzaGrid.displayName = 'PizzaGrid'
export default PizzaGrid;