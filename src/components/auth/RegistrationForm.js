/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';
import {
  userRegistration,
  loginUser,
  checkUser,
} from '../../actionCreators/userActions';

import Form from '../ui/Form';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      password_confirmation: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('It needs to be a valid email')
        .required("It can't be empty"),
      username: Yup.string()
        .min(6, 'Needs to be at least 6 characters')
        .required('Cannot be empty'),
      password: Yup.string()
        .min(8, 'Min value is 8 characters')
        .required('Please enter your password')
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
          'Must contain 8 characters, One Uppercase, One Lowercase, One Number',
        ),
    }),
    onSubmit: values => {
      const { username, password, email } = values;
      const userObj = {
        user: {
          email,
          password,
        },
        guest: {
          username,
        },
      };
      dispatch(userRegistration(userObj));
      dispatch(loginUser(userObj));
      dispatch(checkUser(userObj));
      setRedirect(true);
    },
  });

  return (
    <>
      <div className="w-full max-w-xs mx-auto mt-8">
        <Form formik={formik} signup text="Sign Up" />
      </div>
      {redirect && <Redirect to="/mainpage" />}
    </>
  );
};

export default RegistrationForm;
