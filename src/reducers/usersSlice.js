/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import userActions from '../actionCreators/userActions';

const { currentUser, userRegistration, logoutUser, loginUser } = userActions;

const defaultState = {
  currentUser: '',
  username: '',
  password: '',
  passwordConfirmation: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: '',
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
    [currentUser.fulfilled]: (state, action) => {
      if (action.payload.user) {
        return {
          currentUser: { ...action.payload.user },
        };
      }
      state.status = 'fulfilled';
    },
    [loginUser.fulfilled]: (state, action) => {
      if (action.payload.user) {
        return {
          currentUser: { ...action.payload },
        };
      }
      state.status = 'fulfilled';
    },
    [currentUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [logoutUser.fulfilled]: () => defaultState,
  },
});

export default usersSlice.reducer;
