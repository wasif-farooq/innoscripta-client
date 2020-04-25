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
        <Navbar bg="dark" variant="dark" className="justify-content-end">
            <Container>
                <Brand href="#home">Innoscripta</Brand>
                <Toggle aria-controls="basic-navbar-nav" />
                <Collapse id="justify-content-end">
                    <Nav className="mr-auto" />
                    <Nav>
                        <Link as={Link} to="/">Menu</Link>
                        <Link as={Link} to="/checkout">Checkout</Link>
                    </Nav>
                    {cart.items.length > 0 &&
                    <Button variant="outline-success" onClick={toggle}>
                        <span className="text-muted">Cart</span>
                        <Badge variant="secondary" pill>{cart.items.length}</Badge>
                    </Button>
                    }
                </Collapse>
            </Container>
        </Navbar>
    )
}

TopNav.displayName = TopNav;
export default TopNav;