import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Components/Layout/Main';
import PizzaGrid from './Components/PizzaGrid';
import Checkout from './Components/Checkout';


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
