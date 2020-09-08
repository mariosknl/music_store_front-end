import React from 'react';
import { useSelector } from 'react-redux';

const GuitarName = () => {
  const guitarState = useSelector(state => state.guitars);

  if (!guitarState) {
    return '';
  }

  const { name } = guitarState.instrument.details;

  return (
    <>
      <p className="text-blue-300 font-bold text">{name}</p>
    </>
  );
};

export default GuitarName;
