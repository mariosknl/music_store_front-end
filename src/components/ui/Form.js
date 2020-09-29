/* eslint-disable camelcase */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// import { Redirect } from 'react-router-dom';
import Input from './Input';
import Button from './Button';

const Form = ({ formik, signup, text }) => {
  const { username, password, email } = formik.values;
  const { handleSubmit, handleChange, handleBlur } = formik;
  const { error } = useSelector(state => state.users);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-48"
      >
        {signup ? (
          <label htmlFor="email">
            <Input
              type="email"
              password_confirmation={email}
              id="email"
              value={email}
              placeholder="Email Address"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formik.errors.email && <p>{formik.errors.email}</p>}
          </label>
        ) : (
          ''
        )}

        <label htmlFor="username">
          <Input
            type="text"
            username={username}
            id="username"
            value={username}
            placeholder="username"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formik.errors.username && <p>{formik.errors.username}</p>}
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
          {formik.errors.password && <p>{formik.errors.password}</p>}
        </label>

        <br />
        <Button text={text} />
        <br />
        <div className="text-center font-bold text-xl">
          {error && <p>{error}</p>}
        </div>
      </form>
    </>
  );
};

Form.propTypes = {
  formik: PropTypes.object.isRequired,
  signup: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
export default Form;
