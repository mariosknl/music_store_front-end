/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';

const Form = ({ formik, signup, text }) => {
  const { username, password, passwordConfirmation } = formik.values;
  const { handleSubmit, handleChange, handleBlur } = formik;
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <label htmlFor="username">
          Username
          <Input
            type="text"
            username="username"
            id="username"
            value={username}
            placeholder="username"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>

        <label htmlFor="password">
          <Input
            type="password"
            password={password}
            id="password"
            value={password}
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>

        {signup ? (
          <label htmlFor="passwordConfirmation">
            <Input
              type="password"
              passwordConfirmation={passwordConfirmation}
              id="passwordConfirmation"
              value={passwordConfirmation}
              placeholder="Password Confirmation"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
        ) : (
          ''
        )}
        <Button text={text} />
      </form>
    </>
  );
};

Form.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.string.isRequired]).isRequired,
  signup: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
export default Form;
