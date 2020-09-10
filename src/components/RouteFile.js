import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import RegistrationForm from './auth/RegistrationForm';
import LoginForm from './auth/LoginForm';
import Guitar from './instruments/guitars/Guitar';
import BassGuitar from './instruments/bass/BassGuitar';
import Drumkit from './instruments/drumkit/Drumkit';
import Snare from './instruments/snare/Snare';
import Cymbal from './instruments/cymbals/Cymbal';

const RouteFile = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/signup" component={RegistrationForm} />
    <Route path="/login" component={LoginForm} />
    <Route path="/guitars" component={Guitar} />
    <Route path="/bass" component={BassGuitar} />
    <Route path="/drumkit" component={Drumkit} />
    <Route path="/snare" component={Snare} />
    <Route path="/cymbals" component={Cymbal} />
    <Route render={() => <h1>404: Page not Found</h1>} />
  </Switch>
);

export default RouteFile;
