import React from 'react'
import {Button, Card} from "react-bootstrap";
import Price from '../Price'

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
        <Card style={{ width: '18rem' }}>
            <Img variant="top" src={thumbnail} width={300}  />
            <Body>
                <Title>{name}</Title>
                <Text>
                    {description}
                </Text>
                <p className="mb-2">
                    Price:  <Price value={price} unit='usd' /> in USD, <Price value={price} unit='eur' /> in EUR
                </p>
                <Button
                    variant="dark"
                    onClick={onAdd(id)}
                >+</Button>
            </Body>
        </Card>
    )
}

Item.displayName = 'Item';
export default Item;