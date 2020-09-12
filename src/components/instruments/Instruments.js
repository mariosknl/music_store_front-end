import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Instruments = () => {
  const instrumentsState = useSelector(state => state.instruments.instruments);
  if (instrumentsState.length === 0) {
    return '';
  }

  return (
    <div className="flex flex-wrap p-6 rounded-lg shadow-xl">
      {instrumentsState.map(instrument => (
        <div className="flex m-4 mx-auto rounded-lg h-56" key={uuidv4()}>
          <div className="max-w-sm flex p-6 bg-white rounded-lg shadow-xl">
            <div className="lg:items-center">
              <img
                src={`${instrument.details.image_url}`}
                className="block h-32 w-full rounded-md"
                alt={instrument.details.name}
              />
              <div className="mt-6 font-bold text-center shadow-lg rounded-lg bg-gray-400">
                <p key={uuidv4()} className="">
                  {instrument.details.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instruments;
