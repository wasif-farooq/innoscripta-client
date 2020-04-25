import React from 'react';
import PropTypes from 'prop-types';

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

Price.propTypes = {
    value: PropTypes.number,
    unit: PropTypes.string
}
Price.displayName = 'Price';
export default Price;