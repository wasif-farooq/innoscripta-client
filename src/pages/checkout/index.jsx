import React, {Fragment} from 'react';
import { useSelector } from "react-redux";
import Main from '../../layout/main'
import { Row, Col } from 'react-bootstrap';
import CheckoutForm from "../../components/checkout-form";
import SmartCart from '../../components/smart-cart'
import actions from "../../actions";

const Checkout = () => {

    const cart = useSelector(state => state.cart);

    const doCheckout = values => {
        actions.cart.checkout.dispatch({
            id: cart.id,
            values
        });
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
export default Checkout;