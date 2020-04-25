import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Main from "../../layout/main";
import actions from '../../actions';
import {useSelector} from "react-redux";

const Thankyou = (props) => {

    const cart = useSelector(state => state.cart);

    useEffect(() => {
        setTimeout(() => {

            if (cart.completed) {
                actions.cart.clear.dispatch();
            }

            props.history.replace('/');
        }, 1500)
    }, [])

    return (
        <Main>
            {cart.completed &&
            <h1 className="text-center">Your order has been processed successfully. Thankyou</h1>
            }
            <p className="text-center">Redirecting to menu page</p>
        </Main>
    )
}

Thankyou.displayName = 'Thankyou';
export default withRouter(Thankyou);