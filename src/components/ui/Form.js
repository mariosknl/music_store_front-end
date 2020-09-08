/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Input from './Input';

const Form = formik => {
  const { username, password } = formik.values;
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
      </form>
    </>
  );
};

export default Form;
