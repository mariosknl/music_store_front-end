import { configureStore } from '@reduxjs/toolkit';
import instrumentsReducer from '../reducers/instrumentsSlice';

export default configureStore({
  reducer: {
    instruments: instrumentsReducer,
  },
});
