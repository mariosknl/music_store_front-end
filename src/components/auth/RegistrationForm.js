/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import userRegister from '../../actionCreators/userActions';
import Input from '../ui/Input';
import Button from '../ui/Button';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { userRegistration } = userRegister;
  const formik = useFormik({
    initialValues: { username: '', password: '', passwordConfirmation: '' },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, 'Needs to be at least 5 characters')
        .required('Cannot be empty'),
      password: Yup.string()
        .min(8, 'Min value is 8 characters')
        .required('Please enter your password')
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
          'Must contain 8 characters, One Uppercase, One Lowercase, One Number',
        ),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Password must match',
      ),
    }),
    onSubmit: values => {
      const { username, password, passwordConfirmation } = values;
      const userObj = {
        user: {
          username,
          password,
          passwordConfirmation,
        },
      };
      dispatch(userRegistration(userObj));
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
              type="text"
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
              type="password"
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
              type="password"
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
