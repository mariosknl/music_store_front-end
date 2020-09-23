import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';
import userLog from '../../actionCreators/userActions';
import Form from '../ui/Form';

const LoginForm = () => {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const { loginUser } = userLog;

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(6, 'Needs to be at least 5 characters')
        .max(20, 'Cannot be more than 20 characters')
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
      const { username, password, isAdmin } = values;
      const userObj = {
        user: {
          username,
          password,
          isAdmin,
        },
      };
      dispatch(loginUser(userObj));
      setRedirect(true);
    },
  });

  return (
    <>
      {redirect ? <Redirect to="/mainpage" /> : ''}
      <div className="w-full max-w-xs mx-auto mt-8">
        <Form formik={formik} text="Login" signup={false} />
        {redirect ? <Redirect to="/mainpage" /> : ''}
      </div>
    </>
  );
};

export default LoginForm;
