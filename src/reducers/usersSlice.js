/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import userAction from '../actionCreators/userActions';

const { currentUser, userRegistration } = userAction;
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    username: '',
    password: '',
    passwordConfirmation: '',
  },
  reducers: {},
  extraReducers: {
    [userRegistration.pending]: state => {
      state.status = 'loading';
    },
    [userRegistration.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.users = action.payload;
    },
    [userRegistration.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [currentUser.pending]: state => {
      state.status = 'loading';
    },
    [currentUser.fulfilled]: (state, action) => ({
      username: action.payload.user.username,
      status: 'fulfilled',
    }),
    [currentUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default usersSlice.reducer;
