/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable indent */
/* eslint-disable no-return-assign */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { projectStorage } from '../../../firebase/config';
import newInst from '../../../actionCreators/newInstrumentAction';
import ProgressBar from './ProgressBar';

const InstrumentForm = props => {
  const dispatch = useDispatch();
  const { createInstruments } = newInst;
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [imageAsFile, setImageAsFile] = useState('');
  const [redirect, setRedirect] = useState(false);

  const types = ['image/png', 'image/jpeg'];

  const { fields } = props;
  // const { saveProps } = props;
  const initVals = {};

  fields.forEach(field => (initVals[field] = ''));

  const formik = useFormik({
    initialValues: {
      ...initVals,
    },
    onSubmit: (values, { resetForm }) => {
      // saveProps(values);
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
              const bassGuitarObj = {
                instrument: {
                  bassGuitar: {
                    name,
                    strings,
                    image_url: firebaseURL,
                  },
                },
                type: 'bassGuitar',
              };
              dispatch(createInstruments(bassGuitarObj));
              setRedirect(true);
            });
        },
      );
      return '';
    },
  });

  const handleImage = e => {
    e.preventDefault();
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
      <h3 className="font-bold text-2xl text-center">
        Create a new Instrument
      </h3>
      <form
        onSubmit={formik.handleSubmit}
        className="bg-gray-400 shadow-md rounded px-8 py-6 mb-4 w-3/4 mx-auto mt-8 flex flex-col"
      >
        {fields.map(field => (
          <div key={uuidv4()}>
            {field === 'id' ||
            field === 'created_at' ||
            field === 'updated_at' ||
            field === 'image_url' ? (
              ''
            ) : (
              <input
                type="text"
                onChange={formik.handleChange}
                placeholder={field}
                className="my-2 rounded pl-1"
              />
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
        {file && <div className="error">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
        <button type="submit">Add</button>
      </form>
      {redirect ? <Redirect to="/mainpage" /> : ''}
    </>
  );
};

InstrumentForm.propTypes = {
  fields: PropTypes.instanceOf(Array).isRequired,
};

export default InstrumentForm;
