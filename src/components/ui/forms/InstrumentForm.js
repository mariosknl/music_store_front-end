/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable indent */
/* eslint-disable no-return-assign */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { projectStorage } from '../../../firebase/config';
import newInst from '../../../actionCreators/newInstrumentAction';
import fetchInstruments from '../../../actionCreators/instrumentActions';
import fetchBassGuitars from '../../../actionCreators/bassGuitarActions';
import fetchGuitars from '../../../actionCreators/guitarActions';
import fetchDrumkits from '../../../actionCreators/drumkitActions';
import fetchSnares from '../../../actionCreators/snareActions';
import fetchCymbals from '../../../actionCreators/cymbalActions';

import ProgressBar from './ProgressBar';

const InstrumentForm = props => {
  const dispatch = useDispatch();
  const { createInstruments } = newInst;
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [imageAsFile, setImageAsFile] = useState('');
  const [redirect, setRedirect] = useState(false);

  const types = ['image/png', 'image/jpeg'];

  const { fields, type } = props;
  const initVals = {};

  fields.forEach(field => (initVals[field] = ''));

  const formik = useFormik({
    initialValues: {
      ...initVals,
    },
    onSubmit: (values, { resetForm }) => {
      resetForm({ values: '' });

      if (!imageAsFile) {
        alert('You need to upload an image');
        return '';
      }
      const uploadTask = projectStorage
        .ref(`/images/${imageAsFile.name}`)
        .put(imageAsFile);
      uploadTask.on(
        'state_changed',
        snapShot => {
          console.log(snapShot);
        },
        err => {
          console.log(err);
        },
        () => {
          projectStorage
            .ref('images')
            .child(imageAsFile.name)
            .getDownloadURL()
            .then(firebaseURL => {
              const { name, strings } = values;
              const instrumentsObj = {
                instrument: {
                  name,
                  strings,
                  image_url: firebaseURL,
                },
                type,
              };
              dispatch(createInstruments(instrumentsObj));
              dispatch(fetchInstruments());
              dispatch(fetchGuitars());
              dispatch(fetchBassGuitars());
              dispatch(fetchDrumkits());
              dispatch(fetchSnares());
              dispatch(fetchCymbals());
              setRedirect(true);
            });
        },
      );
      return '';
    },
  });

  const handleImage = e => {
    e.persist();
    const image = e.target.files[0];

    if (image && types.includes(image.type)) {
      setImageAsFile(() => image);
      setError('');
    } else {
      setFile(null);
      setError('You should upload only image (png or jpeg/jpg) ');
    }
  };

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="bg-gray-400 shadow-md rounded px-8 py-6 mb-4 w-3/4 mx-auto mt-8 flex flex-col"
      >
        {fields.map(field => (
          <div key={field}>
            {field === 'image_url' ||
            field === 'id' ||
            field === 'parent_id' ? (
              ''
            ) : (
              <label htmlFor={field}>
                {field}
                <input
                  name={field}
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values[field]}
                  placeholder={field}
                  className="my-2 rounded pl-1 ml-2"
                />
              </label>
            )}
          </div>
        ))}
        <input
          type="file"
          className="mt-2 outline-none"
          name="image"
          onChange={handleImage}
        />
        {error && <div className="error">{error}</div>}
        {imageAsFile && <div className="error">{imageAsFile.name}</div>}
        {file && <ProgressBar file={setImageAsFile} setFile={setImageAsFile} />}
        <button
          type="submit"
          className="bg-gray-200 hover:bg-gray-700 w-1/5 mx-auto rounded py-1 text-bold hover:text-gray-200"
        >
          Add
        </button>
      </form>
      {redirect ? <Redirect to="/mainpage" /> : ''}
    </>
  );
};

InstrumentForm.propTypes = {
  fields: PropTypes.instanceOf(Array).isRequired,
  type: PropTypes.string.isRequired,
};

export default InstrumentForm;
