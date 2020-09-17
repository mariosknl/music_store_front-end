import React from 'react';
import { Link } from 'react-router-dom';

const PageLinks = () => (
  <>
    <Link to="/isntrument_form/0">
      <p>BassForm</p>
    </Link>
    <Link to="/isntrument_form/1">
      <p>Guitar Form</p>
    </Link>
    <Link to="/isntrument_form/2">
      <p>Drumkit Form</p>
    </Link>
    <Link to="/isntrument_form/3">
      <p>Snare Form</p>
    </Link>
    <Link to="/isntrument_form/4">
      <p>Cymbals Form</p>
    </Link>
  </>
);

export default PageLinks;
