import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, InputGroup, FormControl} from "react-bootstrap";


const QuantityField = (props) => {

    const [quantity, setQuantity] = useState(props.value);
    const {
        Control,
        Group
    } = Form

    const {
        onUpdateQuantity
    } = props;

    const emit = value => {
        setQuantity(value)
        if (typeof onUpdateQuantity === 'function') {
            onUpdateQuantity(value)
        }
    }

    const onChange = e => {
        emit(e.target.value * 1);
    }

    const increment = () => {
        emit(quantity * 1 + 1);
    }

    const decrement = () => {
        if (quantity > 1) {
            emit(quantity * 1 - 1);
        }
    }


    return (
        <InputGroup size="sm" style={{width: '100px'}}>
            <InputGroup.Prepend>
                <Button variant="outline-secondary" onClick={decrement}>-</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" value={quantity} onChange={onChange} />
            <InputGroup.Append>
                <Button variant="outline-secondary" onClick={increment}>+</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

QuantityField.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func
}
QuantityField.displayName = 'QuantityField';
export default QuantityField;