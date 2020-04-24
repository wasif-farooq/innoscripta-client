import React from 'react';
import {Button, Navbar, Nav, Container, Badge} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_CART } from "../../actions";
import { Link } from 'react-router-dom';

const TopNav = () => {

    const cart = useSelector(state => state.cart);
    const dispath = useDispatch();
    const { Brand, Toggle, Collapse } = Navbar;

    const toggle = e => {
        dispath({
            type: TOGGLE_CART
        });
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