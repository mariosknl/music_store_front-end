import React from 'react';
import { useSelector } from 'react-redux';

const InstrumentImage = () => {
  const imageState = useSelector(state => state.instruments.guitars);
  if (!imageState) {
    return '';
  }

  return (
    <>
      {imageState.map(image => (
        <img
          key={image.instrument.details.id}
          src={`${image.instrument.details.image_url}`}
          alt="instrument"
        />
      ))}
    </>
  );
};

export default InstrumentImage;
