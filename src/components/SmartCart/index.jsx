import React, { Fragment } from 'react';
import { useSelector } from "react-redux";
import { ListGroup, Badge } from "react-bootstrap/esm";
import Price from '../Price'

const SmartCart = () => {

    const cart = useSelector(state => state.cart);

    return (
        <Fragment>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your Cart</span>
                <Badge pill>{cart.items.length}</Badge>
            </h4>
            <ListGroup as="ul">
                {cart.items.map(item => {
                    return (
                        <ListGroup.Item as="li" className="d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">{item.name}</h6>
                            </div>
                            <Price className="text-muted" value={item.price * item.quantity} />
                        </ListGroup.Item>
                    )
                })}
                <ListGroup.Item as="li" className="d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Sub Total</h6>
                    </div>
                    <Price className="text-muted" value={cart.sub_total} />
                </ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Discount</h6>
                    </div>
                    <Price className="text-muted" value={cart.discount} />
                </ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Delivery Charges</h6>
                    </div>
                    <Price className="text-muted" value={cart.shipping_cost} />
                </ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Total</h6>
                    </div>
                    <Price className="text-muted" value={cart.total} />
                </ListGroup.Item>
            </ListGroup>
        </Fragment>
    )
}

SmartCart.displayName = 'SmartCart';
export default SmartCart;