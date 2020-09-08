import { configureStore } from '@reduxjs/toolkit';
import instrumentsReducer from '../reducers/instrumentsSlice';
import usersReducer from '../reducers/usersSlice';

export default configureStore({
  reducer: {
    instruments: instrumentsReducer,
    users: usersReducer,
  },
});
