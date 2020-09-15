/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useStorage from '../../../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: `${progress} + %` }} />;
};

ProgressBar.propTypes = {
  file: PropTypes.object.isRequired,
  setFile: PropTypes.func.isRequired,
};

export default ProgressBar;
