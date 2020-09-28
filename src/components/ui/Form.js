/* eslint-disable camelcase */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from './Input';
import Button from './Button';

const Form = ({ formik, signup, text }) => {
  const { username, password, password_confirmation } = formik.values;
  const { handleSubmit, handleChange, handleBlur } = formik;
  const error = useSelector(state => state.users.error);

  const [redirect, setRedirect] = useState(false);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-48"
      >
        <label htmlFor="username">
          Username
          <Input
            type="text"
            username={username}
            id="username"
            value={username}
            placeholder="username"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formik.errors.username ? <>{formik.errors.username}</> : ''}
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
          {formik.errors.password ? <>{formik.errors.password}</> : ''}
        </label>

        {signup ? (
          <label htmlFor="password_confirmation">
            <Input
              type="password"
              password_confirmation={password_confirmation}
              id="password_confirmation"
              value={password_confirmation}
              placeholder="Password Confirmation"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formik.errors.password_confirmation ? (
              <>{formik.errors.password_confirmation}</>
            ) : (
              ''
            )}
          </label>
        ) : (
          ''
        )}
        <br />
        <Button text={text} />
      </form>
      <div className="error">{error ? <p>{error}</p> : ''}</div>
      {/* {error === '' ? setRedirect(false) : setRedirect(true)} */}
      {redirect ? <Redirect to="/mainpage" /> : ''}
    </>
  );
};

Form.propTypes = {
  formik: PropTypes.object.isRequired,
  signup: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
export default Form;
