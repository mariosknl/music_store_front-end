import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import fetchGuitars from '../actionCreators/guitarActions';

const SearchInstruments = () => {
  const dispatch = useDispatch();

  const Formik = useFormik({
    initialValues: { instruments: '' },
    onSubmit: values => {
      dispatch(fetchGuitars(values.instrument));
    },
  });

  return (
    <>
      <div className="w-full">
        <form onSubmit={Formik.handleSubmit}>
          <label htmlFor="instrument">
            <p>Instrument</p>
            <input
              type="text"
              id="instrument"
              value={Formik.value}
              placeholder="Search..."
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
      {/* <GuitarName /> */}
    </>
  );
};

export default SearchInstruments;
