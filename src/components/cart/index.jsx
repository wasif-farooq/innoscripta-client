import React from 'react';
import { withRouter } from 'react-router-dom';
import Item from '../cart-item';
import { useSelector } from "react-redux";
import {
    Modal,
    Button,
    Badge,
    ListGroup, Col, Row, Card
} from "react-bootstrap";
import actions from "../../actions";
import Price from '../price';

const Cart = (props) => {

    const {
        Header,
        Title,
        Body,
        Footer
    } = Modal

    const cart = useSelector(state => state.cart);

    const checkout = (e) => {
        onHide(e);
        props.history.push('/checkout');
    }

    const onHide = e => {
        actions.cart.toggle.dispatch();
    }

    const onUpdateQuantity = id => quantity => {
        actions.cart.item.quantity.update.dispatch({
            id,
            quantity
        });
    }

    const onRemove = id => () => {
        actions.cart.item.remove.dispatch({
            id
        });
    }

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            show={cart.show}
            onHide={onHide}
        >
            <Header closeButton>
                <Title id="contained-modal-title-vcenter">
                    <span className="text-muted">Your cart</span>
                    <Badge variant="secondary" pill>{cart.items.length}</Badge>
                </Title>

            </Header>
            <Body>
                <ListGroup>
                    <ListGroup.Item>
                        <Row>
                            <Col sm={4}>
                                <h6 className="my-0">Name</h6>
                            </Col>
                            <Col sm={2}>
                                <h6 className="text-muted">Quantity</h6>
                            </Col>
                            <Col sm={1}>
                                <h6 className="text-muted"> X </h6>
                            </Col>
                            <Col sm={1}>
                                <h6 className="text-muted">Price</h6>
                            </Col>
                            <Col sm={2}>
                                <h6 className="text-muted">Sub Total</h6>
                            </Col>
                            <Col sm={2}>
                                &nbsp;
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                    {cart.items.map((item) => {
                        return (
                            <Item
                                key={item.id}
                                onRemove={onRemove}
                                onUpdateQuantity={onUpdateQuantity(item.id)}
                                {...item}
                            />
                        )
                    })}
                </ListGroup>
            </Body>
            <Footer>
                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h5>Sub Total: <Price value={cart.sub_total} /></h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Discount: <Price value={cart.discount} /></h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Total: <Price value={cart.sub_total} /></h5>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Footer>
            <Footer>
                <Button onClick={checkout}>Checkout</Button>
            </Footer>
        </Modal>
    )

}

Cart.displayName = 'Cart';
export default withRouter(Cart);