import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Homepage from './Homepage';
import InstrumentInfo from './instruments/InstrumentInfo';
import MainPage from './MainPage';

import InstrumentForm from './ui/forms/InstrumentForm';

const AdminRoutes = () => {
  const list = useSelector(state => state.list.list);
  const guitars = useSelector(state => state.guitars.guitars);
  const bassGuitars = useSelector(state => state.bassGuitars.bassGuitars);
  const drumkits = useSelector(state => state.drumkits.drumkits);
  const snares = useSelector(state => state.snares.snares);
  const cymbals = useSelector(state => state.cymbals.cymbals);

  const listArr = [
    bassGuitars[0],
    guitars[0],
    drumkits[0],
    snares[0],
    cymbals[0],
  ];

  if (guitars.length === 0) {
    return '';
  }
  if (bassGuitars.length === 0) {
    return '';
  }
  if (drumkits.length === 0) {
    return '';
  }
  if (snares.length === 0) {
    return '';
  }
  if (cymbals.length === 0) {
    return '';
  }

  return (
    <Switch>
      {listArr.map((inst, idx) => (
        <Route exact key={uuidv4()} path={`/instrument_form/${idx}`}>
          <h3 className="font-bold text-2xl text-center">
            {`Create new ${list[idx]}`}
          </h3>
          <InstrumentForm fields={Object.keys(inst[0])} type={list[idx]} />
        </Route>
      ))}
      {list.map(instrument => (
        <Route exact key={instrument} path={`/instruments/${instrument}`}>
          <InstrumentInfo name={instrument} />
        </Route>
      ))}

      <Route exact path="/mainpage" component={MainPage} />
      <Route exact path="/" component={Homepage} />
      <Route render={() => <h1>404: Page Not Found</h1>} />
    </Switch>
  );
};

export default AdminRoutes;
