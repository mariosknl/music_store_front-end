import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchGuitars from '../actionCreators/guitarActions';
import GuitarName from './GuitarName';
import InstrumentImage from './InstrumentImage';

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGuitars());
  }, [dispatch]);

  return (
    <>
      <GuitarName />
      <InstrumentImage />
    </>
  );
};

export default Homepage;
