import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Navbar from './ui/Navbar';
import MainPage from './MainPage';
import RegistrationForm from './auth/RegistrationForm';
import LoginForm from './auth/LoginForm';
import LoginAdminForm from './auth/LoginAdminForm';
import InstrumentInfo from './instruments/InstrumentInfo';

const RouteFile = () => {
  const list = useSelector(state => state.list.list);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/login_admin" component={LoginAdminForm} />
        <Route path="/mainpage" component={MainPage} />
        <Route path="/signup" component={RegistrationForm} />
        {list.map(instrument => (
          <Route key={instrument} path={`/instruments/${instrument}`}>
            <InstrumentInfo name={instrument} />
          </Route>
        ))}
        <Route render={() => <h1>404: Page not Found</h1>} />
      </Switch>
    </>
  );
};

export default RouteFile;
