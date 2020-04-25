import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import CheckoutForm from './Form';
import SmartCart from '../SmartCart';
import actions from "../../actions";
import { useSelector } from "react-redux";

const Checkout = () => {

    const cart = useSelector(state => state.cart);

    const doCheckout = values => {
        actions.cart.checkout.dispatch({
            id: cart.id,
            values
        });
    }

    if (!cart.id || cart.items.length <= 0) {
        return (
            <Row className="my-5">
                <Col className="d-flex justify-content-center">
                    <h1>Please first select some pizza to do checkout</h1>
                </Col>
            </Row>
        )
    }

    return (
        <Fragment>
            <h3 className="my-3">Checkout</h3>
            <Row>
                <Col md={8}>
                    <CheckoutForm onCheckout={doCheckout} />
                </Col>
                <Col md={4}>
                    <SmartCart />
                </Col>
            </Row>
        </Fragment>
    )

}

Checkout.displayName = 'Checkout';
export default Checkout;