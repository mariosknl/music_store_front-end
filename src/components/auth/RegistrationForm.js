import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import userRegistration from '../../actionCreators/userActions';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const Formik = useFormik({
    initialValues: { users: '' },
    onSubmit: values => {
      dispatch(userRegistration(values.user));
    },
  });

  return (
    <>
      <div className="w-full h-24 m-auto">
        <form onSubmit={Formik.handleSubmit}>
          <label htmlFor="username">
            <input
              type="text"
              id="username"
              value={Formik.value}
              placeholder="Username"
              onChange={Formik.handleChange}
              onBlur={Formik.onBlur}
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
