import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Instruments = () => {
  const instrumentsState = useSelector(state => state.instruments.instruments);
  if (instrumentsState.lenght === 0) {
    return '';
  }

  return (
    <>
      {instrumentsState.map(instrument => (
        <React.Fragment key={uuidv4()}>
          <p key={uuidv4()}>{instrument.instrument.details.name}</p>
          <img
            src={`${instrument.instrument.details.image_url}`}
            alt={instrument.instrument.details.name}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default Instruments;
