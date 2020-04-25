import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";


const QuantityField = (props) => {

    const [quantity, setQuantity] = useState(props.value);
    const {
        Control,
        Group
    } = Form

    const {
        onChange
    } = props;

    const emit = value => {
        setQuantity(value)
        if (typeof onChange === 'function') {
            onChange(value)
        }
    }

    const onUpdateQuantity = e => {
        if (e.target.value > 0) {
            emit(e.target.value);
        }
    }

    const increment = () => {
        emit(quantity + 1);
    }

    const decrement = () => {
        if (quantity > 1) {
            emit(quantity - 1);
        }
    }


    return (
        <Group clas>
            <span className="input-group-btn">
                <Button onClick={decrement}>
                    <span className="glyphicon glyphicon-minus">-</span>
                </Button>
            </span>
            <Control type="email" placeholder="0" value={quantity} size="sm" onChange={onUpdateQuantity} />
            <span className="input-group-btn">
                <Button onClick={increment}>
                    <span className="glyphicon glyphicon-plus">+</span>
                </Button>
            </span>
        </Group>
    )
}

QuantityField.displayName = 'QuantityField';
export default QuantityField;