import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import RegistrationForm from './auth/RegistrationForm';
import LoginForm from './auth/LoginForm';
import Guitar from './instruments/guitars/Guitar';
import BassName from './instruments/bass/BassName';
import Drumkit from './instruments/drumkit/Drumkit';
import Snare from './instruments/snare/Snare';
import Cymbal from './instruments/cymbals/Cymbal';

const RouteFile = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/signup" component={RegistrationForm} />
    <Route path="/login" component={LoginForm} />
    <Route path="/instruments/guitars" component={Guitar} />
    <Route path="/instruments/bass" component={BassName} />
    <Route path="/instruments/drumkit" component={Drumkit} />
    <Route path="/instruments/snare" component={Snare} />
    <Route path="/instruments/cymbals" component={Cymbal} />
    <Route render={() => <h1>404: Page not Found</h1>} />
  </Switch>
);

export default RouteFile;
