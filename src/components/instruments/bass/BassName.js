import React from 'react';
import { useSelector } from 'react-redux';

const BassName = () => {
  const bassState = useSelector(state => state.instruments.guitars);
  return (
    <>
      {bassState.map(bass => (
        <p key={bass.instrument.details.id}>{bass.instrument.details.name}</p>
      ))}
    </>
  );
};

export default BassName;
