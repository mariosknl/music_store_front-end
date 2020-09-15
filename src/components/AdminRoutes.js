import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GuitarForm from './ui/forms/GuitarForm';

const AdminRoutes = () => (
  <Switch>
    <Route exact path="/guitar_form" component={GuitarForm} />
  </Switch>
);

export default AdminRoutes;
