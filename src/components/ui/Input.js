import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  placeholder, value, id, onChange, onBlur,
}) => (
  <input
    type="text"
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id={id}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default Input;
