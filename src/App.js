import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from './components/ui/Navbar';
import RouteFile from './components/RouteFile';
import './App.css';

import curUser from './actionCreators/userActions';
import fetchInstruments from './actionCreators/instrumentActions';
import fetchBassGuitars from './actionCreators/bassGuitarActions';
import fetchGuitars from './actionCreators/guitarActions';
import fetchDrumkits from './actionCreators/drumkitActions';
import fetchSnares from './actionCreators/snareActions';
import fetchCymbals from './actionCreators/cymbalActions';
import Homepage from './components/Homepage';

function App() {
  const dispatch = useDispatch();
  const { currentUser } = curUser;

  useEffect(() => {
    dispatch(currentUser());
    dispatch(fetchInstruments());
    dispatch(fetchGuitars());
    dispatch(fetchBassGuitars());
    dispatch(fetchDrumkits());
    dispatch(fetchSnares());
    dispatch(fetchCymbals());
  }, [dispatch, currentUser]);

  return (
    <div className="App">
      {currentUser.username ? (
        <>
          <Navbar />
          <RouteFile />
        </>
      ) : (
        <Homepage />
      )}
    </div>
  );
}

export default App;
