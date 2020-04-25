import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import Main from '../../layout/main'
import { Row, Col } from 'react-bootstrap';
import CheckoutForm from "../../components/checkout-form";
import SmartCart from '../../components/smart-cart'
import actions from "../../actions";

const Checkout = (props) => {

    const cart = useSelector(state => state.cart);

    useEffect(() => {
        if (cart.completed) {
            props.history.replace('/thank-you');
        }
    }, [cart.completed])

    const doCheckout = values => {
        actions.cart.checkout.dispatch({
            id: cart.id,
            values
        });
    }

    if (cart.items.length <= 0) {
        return (
            <Main>
                <h1 className="text-center">Please add some pizzas and then come back</h1>
            </Main>
        )
    }

    return (
        <Main>
            <h3 className="my-3">Checkout</h3>
            <Row>
                <Col md={8}>
                    <CheckoutForm onCheckout={doCheckout} />
                </Col>
                <Col md={4}>
                    <SmartCart />
                </Col>
            </Row>
        </Main>
    )
}

Checkout.displayName = 'Checkout';
export default withRouter(Checkout);