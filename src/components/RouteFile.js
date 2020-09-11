import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import RegistrationForm from './auth/RegistrationForm';
import LoginForm from './auth/LoginForm';
import InstrumentInfo from './instruments/InstrumentInfo';

const RouteFile = () => {
  const list = ['bassGuitars', 'guitars', 'drumkits', 'snares', 'cymbals'];

  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/signup" component={RegistrationForm} />
      <Route path="/login" component={LoginForm} />
      {list.map(instrument => (
        <Route key={instrument} path={`/instruments/${instrument}`}>
          <InstrumentInfo name={instrument} />
        </Route>
      ))}
      <Route render={() => <h1>404: Page not Found</h1>} />
    </Switch>
  );
};

export default RouteFile;
