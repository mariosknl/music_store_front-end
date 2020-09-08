/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import userRegistration from '../../actionCreators/userActions';
import Input from '../ui/Input';
import Button from '../ui/Button';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { username: '', password: '', passwordConfirmation: '' },
    onSubmit: values => {
      dispatch(userRegistration(values.user));
    },
  });

  return (
    <>
      <div className="w-full max-w-xs">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
            <Input
              username={formik.values.username}
              id="username"
              value={formik.values.username}
              placeholder="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
            <Input
              password={formik.values.password}
              id="password"
              value={formik.values.password}
              placeholder="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
          <label
            htmlFor="passwordConfirmation"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password Confirmation
            <Input
              passwordConfirmation={formik.values.passwordConfirmation}
              id="passwordConfirmation"
              value={formik.values.passwordConfirmation}
              placeholder="Password Confirmation"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>

          <Button text="SignUp" />
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
