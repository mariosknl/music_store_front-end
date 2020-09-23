/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import LikeButton from '../ui/Like';

function InstrumentInfo({ name }) {
  const instrument = useSelector(state => state[name][name]);
  const user = useSelector(state => state.users);
  const { currentUser } = user;

  if (instrument.length === 0) {
    return '';
  }

  return (
    <div className="w-full mx-auto mt-4 font-bold text-center">
      {instrument[0].map(ins => (
        <div
          key={uuidv4()}
          className="w-3/4 overflow-hidden mx-auto text-center">
          <p className="mt-4 lg:text-3xl md:text-2xl underline">{ins.name}</p>
          <img
            src={ins.image_url}
            className="w-full md:w-3/4 my-4 mx-auto rounded bg-white h-32 sm:h-32 md:h-64 lg:h-xxl"
            alt="instrument_image"
          />
          {ins.strings ? (
            <p>
              Strings:
              {ins.strings}
            </p>
          ) : (
            ''
          )}
          {ins.pickups ? (
            <span>
              Pickups:
              {ins.pickups}
            </span>
          ) : (
            ''
          )}
          <br />
          {currentUser && instrument.length !== 0 ? (
            <LikeButton id={ins.id} />
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  );
}

InstrumentInfo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InstrumentInfo;
