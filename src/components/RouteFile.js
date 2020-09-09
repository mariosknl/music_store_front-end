import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import Homepage from './Homepage';
import RegistrationForm from './auth/RegistrationForm';
import LoginForm from './auth/LoginForm';

const RouteFile = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/instruments/search" component={App} />
    <Route path="/signup" component={RegistrationForm} />
    <Route path="/login" component={LoginForm} />
  </Switch>
);

export default RouteFile;
