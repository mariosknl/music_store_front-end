import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
  <button
    type="submit"
    className="bg-gray-400 hover:bg-gray-700 text-gray-700 font-bold mt-4  py-2 px-4 border-b-4 border-gray-700 hover:border-gray-400 rounded hover:text-gray-400"
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
