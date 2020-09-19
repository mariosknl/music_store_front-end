/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import LikeButton from '../ui/Like';

function InstrumentInfo({ name }) {
  const instrument = useSelector(state => state[name]);
  const user = useSelector(state => state.users);
  const { currentUser } = user;

  return (
    <>
      <div className="w-full mx-auto mt-4 font-bold text-center">
        {instrument[name].map(ins =>
          Object.keys(ins[name]).map(key => (
            <div
              key={uuidv4()}
              className="w-3/4 overflow-hidden mx-auto text-center">
              {key === 'image_url' ? (
                <img
                  key={uuidv4()}
                  src={ins[name].image_url}
                  className="w-full md:w-3/4 my-4 mx-auto rounded bg-white h-32 sm:h-32 md:h-64 lg:h-64"
                  alt=""
                />
              ) : (
                ''
              )}
              {key === 'name' ? (
                <p
                  key={uuidv4()}
                  className="mt-4 lg:text-3xl md:text-2xl underline">
                  {ins[name].name}
                </p>
              ) : (
                ''
              )}
              {key === 'strings' ? (
                <p key={uuidv4()}>
                  Strings:
                  {ins[name].strings}
                </p>
              ) : (
                ''
              )}
              {key === 'pickups' ? (
                <span key={uuidv4()}>
                  Pickups:
                  {ins[name].pickups}
                </span>
              ) : (
                ''
              )}
              {currentUser && instrument.length !== 0 ? (
                <LikeButton id={ins[name].id} />
              ) : (
                ''
              )}
            </div>
          )),
        )}
      </div>
    </>
  );
}

InstrumentInfo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InstrumentInfo;
