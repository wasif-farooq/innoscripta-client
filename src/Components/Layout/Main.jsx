import React, { Fragment } from 'react';
import { Container } from "react-bootstrap";
import TopNav from '../TopNav';
import Cart from '../Cart';
import Notification from '../Notification';

const Main = ({children}) => {
    return (
        <Fragment>
            <TopNav />
            <Container>
                <Notification />
                {children}
            </Container>
            <Cart />
        </Fragment>
    )
}

Main.displayName = 'Main';
export default Main;