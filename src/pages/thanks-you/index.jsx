import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Main from "../../layout/main";

const Thankyou = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.history.replace('/');
        }, 1500)
    }, [])

    return (
        <Main>
            <h1 className="text-center">Your order has been processed successfully. Thankyou</h1>
            <p className="text-center">Redirecting to menu page</p>
        </Main>
    )
}

Thankyou.displayName = 'Thankyou';
export default withRouter(Thankyou);