/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { motion } from 'framer-motion';

import logUser from '../../actionCreators/userActions';
import '../../styles/Navbar.css';

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const username = useSelector(state => state.users.currentUser.user);
  const list = useSelector(state => state.list.list);
  const dispatch = useDispatch();
  const { logoutUser } = logUser;

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" onClick={closeMobileMenu} className="navbar-logo">
            <motion.svg
              variants={svgVariants}
              width="80"
              height="45"
              viewBox="0 0 97 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <motion.path
                variants={pathVariants}
                id="big_note"
                d="M24.251 0V63.7279C22.0804 63.0438 19.8127 62.7013 17.5325 62.7133C7.85732 62.7133 0 69.4184 0 78.8937C0 88.369 7.85732 95 17.5325 95C27.2077 95 35.1135 88.0232 35.1135 77.9V33.6452H86.1375V63.7279C83.9669 63.0436 81.6992 62.7012 79.419 62.7133C69.7439 62.7133 61.8865 69.4184 61.8865 78.8937C61.8865 88.369 69.7439 95 79.419 95C89.0942 95 97 88.0232 97 77.9V0H24.251ZM86.1395 23.75H35.1154V10.64H86.1395V23.75Z"
                fill="#CED4DA"
              />
            </motion.svg>
          </Link>
        </div>
        <div className="h-4 w-full text-4xl font-bold md:pl-16 md:text-3xl text-white flex items-center">
          eMusic Store
        </div>
        <div className="menu-icon">
          <button onClick={handleClick} type="button">
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item text-white font-bold uppercase flex items-center ml-2">
            <Link to="/" onClick={closeMobileMenu}>
              Homepage
            </Link>
          </li>
          {list.map(item => (
            <li
              className="nav-item font-bold uppercase text-white flex items-center ml-2"
              key={item}>
              <Link to={`/instruments/${item}`} onClick={closeMobileMenu}>
                {item}
              </Link>
            </li>
          ))}
          {username ? (
            <li>
              <button
                type="button"
                className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                onClick={() => {
                  dispatch(logoutUser());
                }}
                onKeyUp={() => {
                  dispatch(logoutUser());
                }}
                tabIndex={0}>
                logout
              </button>
            </li>
          ) : (
            ''
          )}
        </ul>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
