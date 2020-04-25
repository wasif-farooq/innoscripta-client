import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Layout/Main';
import PizzaGrid from './components/PizzaGrid';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main>
            <PizzaGrid />
          </Main>
        </Route>
        <Route exact path="/checkout">
          <Main>
          <Checkout />
          </Main>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
