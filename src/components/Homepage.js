import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <>
    <div className="homepage relative text-center">Welcome to our store!</div>
    <div className="absolute top-0 m-4 font-bold underline">
      <Link to="/login" className="text-white">
        Click to Sign up/Log in
      </Link>
    </div>
  </>
);
export default Homepage;
