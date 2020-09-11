/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function InstrumentInfo({ name }) {
  const instrument = useSelector(state => state[name]);

  return (
    <>
      {instrument[name].map(ins =>
        Object.keys(ins[name]).map(key => (
          <>
            <p>
              {key === 'name' ? <p>{ins[name].name}</p> : ''}
              {key === 'strings' ? (
                <p>
                  String:
                  {ins[name].strings}
                </p>
              ) : (
                ''
              )}
              {key === 'pickups' ? (
                <p>
                  Pickups:
                  {ins[name].pickups}
                </p>
              ) : (
                ''
              )}
            </p>
            {key === 'image_url' ? (
              <img src={ins[name].image_url} alt="" />
            ) : (
              ''
            )}
          </>
        )),
      )}
    </>
  );
}

InstrumentInfo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InstrumentInfo;
