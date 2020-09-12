import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Instruments = () => {
  const instrumentsState = useSelector(state => state.instruments.instruments);
  if (instrumentsState.length === 0) {
    return '';
  }

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
      {instrumentsState.map(instrument => (
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col mb-2"
          key={uuidv4()}
        >
          <img
            src={`${instrument.details.image_url}`}
            className="bg-cover h-48"
            alt={instrument.details.name}
          />
          <div className="p-4 flex-1 flex flex-col">
            <p key={uuidv4()} className="mb-4 text-grey-darker text-sm flex-1">
              {instrument.details.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instruments;
