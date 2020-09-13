/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function InstrumentInfo({ name }) {
  const instrument = useSelector(state => state[name]);

  return (
    <div className="w-full mx-auto mt-4 font-bold">
      {instrument[name].map(ins =>
        Object.keys(ins[name]).map(key => (
          <div
            key={uuidv4()}
            className="w-3/4 overflow-hidden mx-auto text-center"
          >
            {key === 'image_url' ? (
              <img
                key={uuidv4()}
                src={ins[name].image_url}
                className="w-full my-4 rounded bg-white"
                alt=""
              />
            ) : (
              ''
            )}
            {key === 'name' ? (
              <p
                key={uuidv4()}
                className="mt-4 lg:text-3xl md:text-2xl underline"
              >
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
          </div>
        )),
      )}
    </div>
  );
}

InstrumentInfo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InstrumentInfo;
