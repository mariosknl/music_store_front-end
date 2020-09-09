import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from './components/ui/Navbar';
import RouteFile from './components/RouteFile';
import curUser from './actionCreators/userActions';

function App() {
  const dispatch = useDispatch();
  const { currentUser } = curUser;

  useEffect(() => {
    dispatch(currentUser());
  });
  return (
    <div className="App">
      <Navbar />
      <RouteFile />
    </div>
  );
}

export default App;
