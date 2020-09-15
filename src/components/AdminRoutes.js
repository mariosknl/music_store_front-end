import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Homepage from './Homepage';
import InstrumentInfo from './instruments/InstrumentInfo';
import MainPage from './MainPage';

import GuitarForm from './ui/forms/GuitarForm';

const AdminRoutes = () => {
  const list = useSelector(state => state.list.list);

  return (
    <Switch>
      <Route path="/mainpage" component={MainPage} />
      {list.map(instrument => (
        <Route exact key={instrument} path={`/instruments/${instrument}`}>
          <InstrumentInfo name={instrument} />
        </Route>
      ))}
      <Route exact path="/guitar_form" component={GuitarForm} />
      <Route exact path="/" component={Homepage} />
      <Route render={() => <h1>404: Page Not Found</h1>} />
    </Switch>
  );
};

export default AdminRoutes;
