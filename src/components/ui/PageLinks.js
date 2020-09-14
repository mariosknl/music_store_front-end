import React from 'react';
import { Link } from 'react-router-dom';

const PageLinks = () => (
  <>
    <Link to="/guitar_form">
      <p>Guitar Form</p>
    </Link>
    <Link to="/bass_form">
      <p>BassForm</p>
    </Link>
    <Link to="/drumkit_form">
      <p>Drumkit Form</p>
    </Link>
    <Link to="/snare_form">
      <p>Snare Form</p>
    </Link>
    <Link to="/cymbals_form">
      <p>Cymbals Form</p>
    </Link>
  </>
);

export default PageLinks;
