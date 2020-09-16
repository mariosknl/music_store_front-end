import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Homepage from './Homepage';
import InstrumentInfo from './instruments/InstrumentInfo';
import MainPage from './MainPage';

import GuitarForm from './ui/forms/GuitarForm';
import InstrumentForm from './ui/forms/InstrumentForm';

const AdminRoutes = () => {
  const list = useSelector(state => state.list.list);
  const guitars = useSelector(state => state.guitars);
  const bassGuitars = useSelector(state => state.bassGuitars);

  if (guitars.guitars.length === 0) {
    return '';
  }
  if (bassGuitars.bassGuitars.length === 0) {
    return '';
  }
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
      <Route exact path="/instrument_form">
        <InstrumentForm
          fields={Object.keys(bassGuitars.bassGuitars[0].bassGuitars)}
        />
        {/* <InstrumentForm
          fields={Object.keys(bassGuitars.bassGuitars[0].bassGuitars)}
        /> */}
      </Route>
      <Route render={() => <h1>404: Page Not Found</h1>} />
    </Switch>
  );
};

export default AdminRoutes;
