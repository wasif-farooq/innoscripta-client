import React from 'react'
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

Item.displayName = 'Item';
export default Item;