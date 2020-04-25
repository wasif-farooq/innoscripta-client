import React from 'react';

const Price = (props) => {

    const {
        value,
        unit = 'eur',
        ...rest
    } = props;

    if (unit === 'usd') {
        return (
            <sapn {...rest}>${(value * 1.08).toFixed(2)}</sapn>
        )
    }

    return (
        <sapn {...rest}>€{(value * 1).toFixed(2)}</sapn>
    )
}

Price.displayName = 'Price';
export default Price;