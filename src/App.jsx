import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes/main';
import actions from "./actions";

const App = () => {

    const id = JSON.parse(localStorage.getItem('cart'));
    if (id) {
        actions.cart.get.dispatch(id);
    }

  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}

export default App;
