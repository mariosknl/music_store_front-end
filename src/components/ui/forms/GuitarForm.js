/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ProgressBar from './ProgressBar';
import newInst from '../../../actionCreators/newInstrumentAction';
import { projectStorage } from '../../../firebase/config';

const GuitarForm = () => {
  const dispatch = useDispatch();
  const { createInstruments } = newInst;
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [imageAsFile, setImageAsFile] = useState('');

  const types = ['image/png', 'image/jpeg'];

  const formik = useFormik({
    initialValues: {
      name: '',
      strings: '',
      pickups: '',
      image_url: '',
    },
    onSubmit: values => {
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
              const { name, strings, pickups } = values;
              const guitarObj = {
                instrument: {
                  guitar: {
                    name,
                    strings,
                    pickups,
                    image_url: firebaseURL,
                  },
                },
                type: 'guitar',
              };
              dispatch(createInstruments(guitarObj));
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
      setError('You should upload only image (png or jpeg/jpg)');
      console.log(image);
    }
  };

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
        <input type="file" name="image" onChange={handleImage} />
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
