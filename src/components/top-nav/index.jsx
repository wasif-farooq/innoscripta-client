import React from 'react';
import {Button, Navbar, Nav, Container, Badge} from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import actions from '../../actions';

const TopNav = () => {

    const cart = useSelector(state => state.cart);
    const { Brand, Toggle, Collapse } = Navbar;

    const toggle = e => {
        actions.cart.toggle.dispatch();
    }

    return (
        <Navbar bg="dark" variant="dark" className="justify-content-end mb-4">
            <Container>
                <Brand href="#home">Innoscripta</Brand>
                <Toggle aria-controls="basic-navbar-nav" />
                <Collapse id="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Menu</Nav.Link>
                        <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                        {cart.items.length > 0 &&
                        <Button variant="outline-success" onClick={toggle}>
                            <span className="mr-1">Cart</span>
                            <Badge variant="success" pill>{cart.items.length}</Badge>
                        </Button>
                        }
                    </Nav>

                </Collapse>
            </Container>
        </Navbar>
    )
}

TopNav.displayName = TopNav;
export default TopNav;