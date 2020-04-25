import React from 'react'
import PropTypes from 'prop-types';
import { Button, Card } from "react-bootstrap";
import Price from '../price'

const Item = (props) => {

    const { Img, Body,  Title, Text } = Card;
    const {
        id,
        name,
        thumbnail,
        description,
        price,
        onAdd
    } = props

    return (
        <Card className="shadow shadow-lg mb-2">
            <Img variant="top" src={thumbnail}  />
            <Body>
                <Title>{name}</Title>
                <Text className="text-secondary">
                    {description}
                </Text>
                <Button size="sm"
                    variant="dark"
                    onClick={onAdd(id)}
                    block
                >
                    <Price value={price} unit='usd' />
                    <span className="ml-1">/</span>
                    <Price className="ml-1" value={price} unit='eur' />
                    <span className="ml-1">|</span>
                    <span className="ml-1">Add to Cart</span>
                </Button>
            </Body>
        </Card>
    )
}

Item.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    onAdd: PropTypes.func
}
Item.displayName = 'Item';
export default Item;