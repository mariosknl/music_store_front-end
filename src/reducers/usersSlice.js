/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import userActions from '../actionCreators/userActions';

const {
  checkUser, userRegistration, logoutUser, loginUser,
} = userActions;

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
    [checkUser.pending]: state => {
      state.status = 'loading';
    },
    [checkUser.fulfilled]: (state, action) => {
      if (action.payload.user) {
        return {
          ...state,
          user: { user: action.payload.user },
        };
      }
      state.status = 'fulfilled';
    },
    [checkUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [loginUser.fulfilled]: (state, action) => {
      if (action.payload.user) {
        return {
          currentUser: { ...action.payload },
        };
      }
      state.status = 'fulfilled';
    },
    [logoutUser.fulfilled]: () => defaultState,
  },
});

export default usersSlice.reducer;
