import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import Navbar from './components/ui/Navbar';
import RouteFile from './components/RouteFile';
import AdminRoutes from './components/AdminRoutes';
import './App.css';

import { checkUser } from './actionCreators/userActions';
import fetchInstruments from './actionCreators/instrumentActions';
import fetchBassGuitars from './actionCreators/bassGuitarActions';
import fetchGuitars from './actionCreators/guitarActions';
import fetchDrumkits from './actionCreators/drumkitActions';
import fetchSnares from './actionCreators/snareActions';
import fetchCymbals from './actionCreators/cymbalActions';

function App() {
  const dispatch = useDispatch();
  const profileType = useSelector(state => state.users.profileType);

  useEffect(() => {
    dispatch(checkUser());
    dispatch(fetchInstruments());
    dispatch(fetchGuitars());
    dispatch(fetchBassGuitars());
    dispatch(fetchDrumkits());
    dispatch(fetchSnares());
    dispatch(fetchCymbals());
  }, [dispatch]);
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Navbar />
      {profileType === 'Admin' ? <AdminRoutes /> : <RouteFile />}
    </div>
  );
}

export default App;
