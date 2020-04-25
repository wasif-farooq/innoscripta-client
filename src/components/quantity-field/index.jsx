import React, {useState} from 'react';
import {Button, Form, InputGroup, FormControl} from "react-bootstrap";


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
        <InputGroup size="sm" style={{width: '100px'}}>
            <InputGroup.Prepend>
                <Button variant="outline-secondary" onClick={decrement}>-</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" value={quantity} onChange={onUpdateQuantity} />
            <InputGroup.Append>
                <Button variant="outline-secondary" onClick={increment}>+</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

QuantityField.displayName = 'QuantityField';
export default QuantityField;