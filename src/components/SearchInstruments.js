import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import fetchGuitars from '../actionCreators/guitarActions';

const SearchInstruments = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { instruments: '' },
    onSubmit: values => {
      dispatch(fetchGuitars(values.instrument));
    },
  });

  return (
    <>
      <div className="w-full">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="instrument">
            <p>Instrument</p>
            <input
              type="text"
              id="instrument"
              value={formik.value}
              placeholder="Search..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchInstruments;
