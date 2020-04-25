import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from '../pages/menu';
import Checkout from '../pages/checkout';
import Thankyou from '../pages/thanks-you'

const MainRoutes = () => {

    return (
        <Switch>
            <Route path="/" exact component={Menu} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/thank-you" exact component={Thankyou} />
        </Switch>
    );
};

MainRoutes.displayName = 'MainRoutes';
export default MainRoutes;