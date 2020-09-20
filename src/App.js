import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from './components/ui/Navbar';
import RouteFile from './components/RouteFile';
import AdminRoutes from './components/AdminRoutes';
import './App.css';

import curUser from './actionCreators/userActions';
import fetchInstruments from './actionCreators/instrumentActions';
import fetchBassGuitars from './actionCreators/bassGuitarActions';
import fetchGuitars from './actionCreators/guitarActions';
import fetchDrumkits from './actionCreators/drumkitActions';
import fetchSnares from './actionCreators/snareActions';
import fetchCymbals from './actionCreators/cymbalActions';

function App() {
  const dispatch = useDispatch();
  const { checkUser } = curUser;
  const admin = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchInstruments());
    dispatch(fetchGuitars());
    dispatch(fetchBassGuitars());
    dispatch(fetchDrumkits());
    dispatch(fetchSnares());
    dispatch(fetchCymbals());
    dispatch(checkUser());
  }, [dispatch, checkUser]);

  return (
    <div className="App">
      <Navbar />
      {admin.currentUser.user ? <AdminRoutes /> : <RouteFile />}
    </div>
  );
}

export default App;
