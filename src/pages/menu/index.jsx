import React, {useEffect} from 'react'
import { useSelector } from "react-redux";
import Main from '../../layout/main'
import { Row, Col } from "react-bootstrap";
import actions from '../../actions';
import Item from '../../components/menu-item'

const Menu = () => {

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
        <Main>
            <Row>
                {pizzas.map((item) => {
                    return (
                        <Col sm={4} key={item.id}>
                            <Item {...item} onAdd={onAdd} />
                        </Col>
                    )
                })}
            </Row>
        </Main>
    )
}

Menu.displayName = 'Menu';
export default Menu;