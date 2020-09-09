import React from 'react';
import { useSelector } from 'react-redux';

const GuitarName = () => {
  const guitarState = useSelector(state => state.instruments.guitars);
  if (!guitarState) {
    return '';
  }

  return (
    <>
      {guitarState.map(guitar => (
        <p key={guitar.instrument.details.id}>
          {guitar.instrument.details.name}
        </p>
      ))}
    </>
  );
};

export default GuitarName;
