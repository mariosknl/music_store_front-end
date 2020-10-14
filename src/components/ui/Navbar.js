/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { motion } from 'framer-motion';

import { logoutUser } from '../../actionCreators/userActions';
import '../../styles/Navbar.css';

const containerVariants = {
  hidden: {
    opacity: 0.5,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 1,
      duration: 1.2,
    },
  },
};

const svgVariants = {
  hidden: {
    rotate: -270,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
      when: 'afterChildren',
    },
  },
};

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const { profileType, currentUser } = useSelector(state => state.users);

  const list = useSelector(state => state.list.list);
  const dispatch = useDispatch();

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
      <motion.nav
        className="navbar"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <div className="navbar-container container">
          <Link to="/" onClick={closeMobileMenu} className="navbar-logo">
            <motion.svg
              width="80"
              height="45"
              viewBox="0 0 97 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={svgVariants}
              initial="hidden"
              animate="visible">
              <path
                id="big_note"
                d="M24.251 0V63.7279C22.0804 63.0438 19.8127 62.7013 17.5325 62.7133C7.85732 62.7133 0 69.4184 0 78.8937C0 88.369 7.85732 95 17.5325 95C27.2077 95 35.1135 88.0232 35.1135 77.9V33.6452H86.1375V63.7279C83.9669 63.0436 81.6992 62.7012 79.419 62.7133C69.7439 62.7133 61.8865 69.4184 61.8865 78.8937C61.8865 88.369 69.7439 95 79.419 95C89.0942 95 97 88.0232 97 77.9V0H24.251ZM86.1395 23.75H35.1154V10.64H86.1395V23.75Z"
                fill="#CED4DA"
              />
            </motion.svg>
          </Link>
        </div>
        <div className="h-4 w-1/6 xl:text-3xl font-bold md:text-2xl sm:text-base text-white">
          eMusic Store
        </div>
        <div className="menu-icon">
          <button onClick={handleClick} type="button">
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {currentUser === '' ? (
            <li className="nav-item font-bold text-gray-500 hover:text-white uppercase text-white mx-auto justify-center flex items-center my-2">
              <Link
                to="/signup"
                onClick={() => {
                  closeMobileMenu();
                }}>
                Sign Up
              </Link>
            </li>
          ) : (
            ''
          )}
          <li className="nav-item text-gray-500 hover:text-white font-bold uppercase flex justify-center items-center ml-1">
            <Link to="/mainpage" onClick={closeMobileMenu}>
              Homepage
            </Link>
          </li>
          {list.map(item => (
            <li
              className="nav-item font-bold text-gray-500 hover:text-white uppercase text-white mx-auto justify-center flex items-center ml-1"
              key={item}>
              <Link to={`/instruments/${item}`} onClick={closeMobileMenu}>
                {item}
              </Link>
            </li>
          ))}
          {currentUser.length !== 0 ? (
            <li>
              <Link
                to="/mainpage"
                className="nav-item font-bold text-gray-500 hover:text-white uppercase text-white mx-auto justify-center flex items-center ml-1"
                onClick={() => {
                  dispatch(logoutUser());
                  closeMobileMenu();
                }}>
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                  className="nav-item font-bold text-gray-500 hover:text-white uppercase text-white mx-auto justify-center flex items-center ml-1">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/login_admin"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                  className="nav-item font-bold text-gray-500 hover:text-white uppercase text-white mx-auto justify-center flex items-center ml-1">
                  Login[Admin]
                </Link>
              </li>
            </>
          )}
          {profileType === 'Admin' ? (
            <>
              <li>
                <Link
                  to="/instrument_form/0"
                  onClick={closeMobileMenu}
                  className="block text-gray-500 hover:text-white focus:text-white focus:outline-none md:text-base">
                  Create BassGuitars
                </Link>
              </li>
              <li>
                <Link
                  to="/instrument_form/1"
                  onClick={closeMobileMenu}
                  className="block text-gray-500 hover:text-white focus:text-white focus:outline-none md:text-base">
                  Create Guitars
                </Link>
              </li>
              <li>
                <Link
                  to="/instrument_form/2"
                  onClick={closeMobileMenu}
                  className="block text-gray-500 hover:text-white focus:text-white focus:outline-none md:text-base">
                  Create Drumkits
                </Link>
              </li>
              <li>
                <Link
                  to="/instrument_form/3"
                  onClick={closeMobileMenu}
                  className="block text-gray-500 hover:text-white focus:text-white focus:outline-none md:text-base">
                  Create Snares
                </Link>
              </li>
              <li>
                <Link
                  to="/instrument_form/4"
                  onClick={closeMobileMenu}
                  className="block text-gray-500 hover:text-white focus:text-white focus:outline-none md:text-base">
                  Create Cymbals
                </Link>
              </li>
            </>
          ) : (
            ''
          )}
        </ul>
      </motion.nav>
    </IconContext.Provider>
  );
};

export default Navbar;
