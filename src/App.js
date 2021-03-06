import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  const { profileType } = useSelector(state => state.users);

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
      {profileType === 'Admin' ? <AdminRoutes /> : <RouteFile />}
    </div>
  );
}

export default App;
