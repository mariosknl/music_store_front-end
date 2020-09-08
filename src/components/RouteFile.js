import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import Homepage from './Homepage';

const RouteFile = () => (
  <Switch>
    <Route exact path="/">
      <Homepage />
    </Route>
    <Route path="/instruments/search">
      <App />
    </Route>
  </Switch>
);

export default RouteFile;
