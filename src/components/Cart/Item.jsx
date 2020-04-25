import React from 'react';
import { Button, ListGroup, Row, Col } from "react-bootstrap";
import Quantity from './Quantity';
import Price from '../Price';

const Item = (props) => {

    const {
        id,
        name,
        quantity,
        price,
        onRemove,
        onUpdateQuantity
    } = props

    return (
        <ListGroup.Item>
            <hr />
            <Row>
                <Col sm={4}>
                    <h6 className="my-0">{name}</h6>
                </Col>
                <Col sm={2}>
                    <Quantity value={quantity} onChange={onUpdateQuantity} />
                </Col>
                <Col sm={1}>
                    <span className="text-muted"> X </span>
                </Col>
                <Col sm={1}>
                    <Price className="text-muted" value={price} />
                </Col>
                <Col sm={2}>
                    <Price className="text-muted" value={quantity * price} />
                </Col>
                <Col sm={2}>
                    <Button variant="dark" onClick={onRemove(id)}>Remove</Button>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

Item.displayName = 'Item';
export default Item;