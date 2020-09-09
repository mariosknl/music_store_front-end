/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import userRegister from '../../actionCreators/userActions';
import Button from '../ui/Button';
import Form from '../ui/Form';

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
        <Form formik={formik} signup text="Sign Up" />
      </div>
    </>
  );
};

export default RegistrationForm;
