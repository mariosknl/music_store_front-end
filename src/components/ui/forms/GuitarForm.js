/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ProgressBar from './ProgressBar';
import newInst from '../../../actionCreators/newInstrumentAction';

const GuitarForm = () => {
  const dispatch = useDispatch();
  const { createInstruments } = newInst;
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = e => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      strings: '',
      pickups: '',
      image_url: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Needs to be at least 3 characters')
        .required('Cannot be empty'),
      strings: Yup.number().required('Cannot be empty'),
      pickups: Yup.number().required('Cannot be empty'),
      image_url: Yup.string().required('Cannot be empty'),
    }),

    onSubmit: values => {
      const {
        name, strings, pickups, image_url,
      } = values;
      const guitarObj = {
        guitar: {
          name,
          strings,
          pickups,
          image_url,
        },
      };
      dispatch(createInstruments(guitarObj));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Instrument Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      <label htmlFor="strings">Strings: </label>
      <input
        id="strings"
        name="strings"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.strings}
      />
      <label htmlFor="pickups">Pickups: </label>
      <input
        id="pickups"
        name="pickups"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.pickups}
      />
      <label htmlFor="file">
        <input type="file" name="" id="" onChange={changeHandler} />
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="error">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default GuitarForm;
