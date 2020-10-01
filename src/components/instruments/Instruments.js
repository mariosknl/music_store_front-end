import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

const instrumentVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 1.2,
    },
  },
};

const Instruments = () => {
  const instrumentsState = useSelector(state => state.instruments.instruments);
  if (instrumentsState.length === 0) {
    return '';
  }

  return (
    <div className="flex flex-wrap p-6 rounded-lg shadow-xl">
      {instrumentsState[0].map(instrument => (
        <motion.div
          className="flex m-4 h-48 mx-auto rounded-lg h-56"
          variants={instrumentVariants}
          initial="hidden"
          animate="visible"
          key={uuidv4()}
        >
          <div className="max-w-sm flex p-6 bg-white rounded-lg shadow-xl">
            <div className="lg:items-center flex-col">
              <img
                src={`${instrument.details.image_url}`}
                className="h-3/4 w-full flex-start rounded-md"
                alt={instrument.details.name}
              />
              <div className="mt-6 h-1/4 font-bold flex-end text-center shadow-lg rounded-lg bg-gray-400">
                <p>{instrument.details.name}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Instruments;
