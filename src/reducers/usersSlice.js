/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  checkUser,
  userRegistration,
  logoutUser,
  loginUser,
} from '../actionCreators/userActions';

const defaultState = {
  currentUser: '',
  status: 'idle',
  profileType: '',
  error: [],
  likes: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: '',
    status: 'idle',
    profileType: '',
    likes: [],
  },
  reducers: {},
  extraReducers: {
    [userRegistration.pending]: state => {
      state.status = 'loading';
    },
    [userRegistration.fulfilled]: (state, action) => ({
      ...state,
      status: 'fulfilled',
      currentUser: action.payload,
    }),
    [userRegistration.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [checkUser.pending]: state => {
      state.status = 'loading';
    },
    [checkUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload.username;
      state.profileType = action.payload.profile_type;
      state.likes = action.payload.likes;

      if (action.payload.message) {
        state.currentUser = '';
      }
    },
    [checkUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [loginUser.pending]: state => {
      state.status = 'loading';
    },
    [loginUser.rejected]: state => {
      state.status = 'wrong';
      state.error = 'Wrong email or password';
    },

    [loginUser.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.currentUser = action.payload.username;
      state.profileType = action.payload.profile_type;
      state.likes = action.payload.likes.likes;
    },
    [logoutUser.fulfilled]: () => defaultState,
  },
});

export default usersSlice.reducer;
