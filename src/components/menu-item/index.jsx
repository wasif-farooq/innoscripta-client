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

    let descriptions = description.substr(0, 100);
    return (
        <Card className="shadow shadow-lg mb-2">
            <Img variant="top" src={thumbnail}  />
            <Body>
            <Title>{name}</Title>
            <Text className="text-secondary">
                {descriptions}
            </Text>
            <Button size="sm"
                variant="dark"
                onClick={onAdd(id)}
                block
            ><Price value={price} unit='usd' /> | Add to Cart</Button>
            </Body>
        </Card>
    )
}

Item.displayName = 'Item';
export default Item;