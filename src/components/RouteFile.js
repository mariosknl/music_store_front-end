import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import MainPage from './MainPage';
import RegistrationForm from './auth/RegistrationForm';
import LoginForm from './auth/LoginForm';
import Homepage from './Homepage';
import InstrumentInfo from './instruments/InstrumentInfo';

const RouteFile = () => {
  const list = useSelector(state => state.list.list);

  return (
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route path="/mainpage" component={MainPage} />
      <Route path="/signup" component={RegistrationForm} />
      {list.map(instrument => (
        <Route key={instrument} path={`/instruments/${instrument}`}>
          <InstrumentInfo name={instrument} />
        </Route>
      ))}
      <Route exact path="/" component={Homepage} />
      <Route render={() => <h1>404: Page not Found</h1>} />
    </Switch>
  );
};

export default RouteFile;
