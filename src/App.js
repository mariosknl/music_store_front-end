import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from './components/ui/Navbar';
import RouteFile from './components/RouteFile';
import curUser from './actionCreators/userActions';
import fetchInstruments from './actionCreators/instrumentActions';

function App() {
  const dispatch = useDispatch();
  const { currentUser } = curUser;

  useEffect(() => {
    dispatch(currentUser());
    dispatch(fetchInstruments());
  }, [dispatch, currentUser]);
  return (
    <div className="App">
      <Navbar />
      <RouteFile />
    </div>
  );
}

export default App;
