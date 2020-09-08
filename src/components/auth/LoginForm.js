import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import userLog from '../../actionCreators/userActions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { userLogin } = userLog;

  const formik = useFormik({
    initialValues: { username: '', password: ''},
    validationSchema: Yup.object({
      username: Yup.string().username('It needs to be a valid username').required('Please Enter Your Username'),
      password: Yup.object().min(8, 'Min value is 8 characters').required('Please Enter Your Password')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        'Must contain 8 characters, One Uppercase, One Lowercase, One Number',
      ),
    }),
    onSubmit: values => {
      const { username, password } = values;
      const userObj = {
        user: {
          username,
          password
        },
      };
      dispatch(userLogin(userObj));
    },
  });

  return (
    <>
      
    </>
  )
    
