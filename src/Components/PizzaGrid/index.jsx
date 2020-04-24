import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Item from './Item';
import { useSelector, useDispatch } from "react-redux";
import { FETCH_PIZZAS, ADD_TO_CART } from '../../actions';

const PizzaGrid = () => {

    const pizzas = useSelector(state => state.pizzas.list)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: FETCH_PIZZAS
        });
    }, [dispatch])

    const onAdd = id => e => {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                product_id: id,
                quantity: 1
            }
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