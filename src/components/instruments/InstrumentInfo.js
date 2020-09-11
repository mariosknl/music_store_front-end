/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function InstrumentInfo({ name }) {
  const instrument = useSelector(state => state[name]);

  return (
    <>
      {instrument[name].map(ins =>
        Object.keys(ins[name]).map(key => (
          <React.Fragment key={uuidv4()}>
            {key === 'name' ? <p key={uuidv4()}>{ins[name].name}</p> : ''}
            {key === 'strings' ? (
              <p key={uuidv4()}>
                String:
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
            {key === 'image_url' ? (
              <img key={uuidv4()} src={ins[name].image_url} alt="" />
            ) : (
              ''
            )}
          </React.Fragment>
        )),
      )}
    </>
  );
}

InstrumentInfo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InstrumentInfo;
