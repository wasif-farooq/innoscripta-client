import React from 'react';
import { withRouter } from 'react-router-dom';
import Item from '../cart-item';
import { useSelector } from "react-redux";
import {
    Modal,
    Button,
    Badge,
    ListGroup,
    Card,
    Table
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
                    <span className="text-muted mr-1">Your Cart</span>
                    <Badge variant="secondary" pill>{cart.items.length}</Badge>
                </Title>

            </Header>
            <Body>
                <Table striped bordered hover size="sm" className="align-middle">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Price</th>
                            <th className="text-center" />
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </Table>
            </Body>
            <Footer>
                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <label className="mb-0 d-block">Sub Total: <Price className="float-right" value={cart.sub_total} /></label>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <label className="mb-0 d-block">Discount: <Price className="float-right" value={cart.discount} /></label>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <label className="mb-0 d-block">Total: <Price className="float-right" value={cart.sub_total} /></label>
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