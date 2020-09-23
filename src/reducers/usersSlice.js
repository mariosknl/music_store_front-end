/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import userActions from '../actionCreators/userActions';

const {
  checkUser, userRegistration, logoutUser, loginUser,
} = userActions;

const defaultState = {
  username: '',
  admin: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    username: '',
    admin: false,
  },
  reducers: {
    setUsername: (state, action) => {
      const value = action.payload;
      state.username = value;
    },
  },
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
    [checkUser.pending]: state => {
      state.status = 'loading';
    },
    [checkUser.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      if (action.payload.user) {
        state.username = action.payload.user.username;
        state.admin = action.payload.user.admin;
      }
    },
    [checkUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      if (action.payload.user) {
        state.username = action.payload.user.username;
        state.admin = action.payload.user.admin;
      }
    },
    [logoutUser.fulfilled]: () => defaultState,
  },
});

export default usersSlice.reducer;
