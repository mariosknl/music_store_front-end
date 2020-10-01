import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Homepage = () => (
  <div className="homepage">
    <motion.div
      className="border-4 text-center w-1/3 mx-auto rounded-b-full py-5 px-2 absolute-center "
      initial={{ y: -550, opacity: 0 }}
      animate={{ y: 100, opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
    >
      <h1 className="text-white w-full text-center text-2xl">
        Welcome to our Music Store
      </h1>
      <motion.div
        whileHover={{
          scale: 1.2,
          textShadow: '0px 0px 8px rgb(255,255,255)',
          boxShadow: '0px 0px 8px rgb(255,255,255)',
        }}
        className="w-1/4 mx-auto rounded mt-1"
      >
        <Link
          to="/mainpage"
          className="text-black mx-auto font-bold text-2xl bg-gray-200 rounded px-2 hover:text-white hover:bg-black"
        >
          Enter
        </Link>
      </motion.div>
    </motion.div>
  </div>
);
export default Homepage;
