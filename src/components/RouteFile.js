import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import RegistrationForm from './auth/RegistrationForm';
import LoginForm from './auth/LoginForm';
// import Guitar from './instruments/Guitar';

const RouteFile = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/signup" component={RegistrationForm} />
    <Route path="/login" component={LoginForm} />
    {/* <Route path="/guitars" component={Guitar} /> */}
    <Route render={() => <h1>404: Page not Found</h1>} />
  </Switch>
);

export default RouteFile;
