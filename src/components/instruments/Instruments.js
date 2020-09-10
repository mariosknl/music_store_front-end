import React from 'react';
import { useSelector } from 'react-redux';

const Instruments = () => {
  const instrumentsState = useSelector(state => state.instruments.instruments);
  if (!instrumentsState) {
    return '';
  }

  return (
    <>
      {instrumentsState.map(instrument => (
        <>
          <p key={instrument.details}>{instrument.instrument.details.name}</p>
          <img
            key={instrument.details}
            src={`${instrument.instrument.details.image_url}`}
            alt={`${instrument.instrument.details.name}`}
          />
        </>
      ))}
    </>
  );
};

export default Instruments;
