import React from 'react';
import { Button, ListGroup, Row, Col } from "react-bootstrap";
import QuantityField from '../quantity-field';
import Price from '../price';

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
        <tr>
            <td>{name}</td>
            <td><QuantityField value={quantity} onChange={onUpdateQuantity} /></td>
            <td><Price className="text-muted" value={price} /></td>
            <td><Price className="text-muted" value={quantity * price} /></td>
            <td className="text-center"><Button size="sm" variant="danger" onClick={onRemove(id)}>x</Button></td>
        </tr>
    )
}

Item.displayName = 'Item';
export default Item;