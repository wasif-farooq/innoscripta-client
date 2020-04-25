import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container } from "react-bootstrap";
import TopNav from '../../components/top-nav';
import Cart from '../../components/cart';
import Notification from '../../components/notification';

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

Main.propTypes = {
    children: PropTypes.object
}
Main.displayName = 'Main';
export default Main;