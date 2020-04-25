import React from 'react';

const Price = (props) => {

    const {
        value,
        unit = 'eur',
        ...rest
    } = props;

    if (unit === 'usd') {
        return (
            <span {...rest}>${(value * 1.08).toFixed(2)}</span>
        )
    }

    return (
        <span {...rest}>€{(value * 1).toFixed(2)}</span>
    )
}

Price.displayName = 'Price';
export default Price;