/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import userActions from '../actionCreators/userActions';

const {
  checkUser, userRegistration, logoutUser, loginUser,
} = userActions;

const defaultState = {
  username: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: '',
    status: 'idle',
    profile_type: '',
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
    // [checkUser.fulfilled]: (state, action) => {
    //   if (action.payload.guest) {
    //     return {
    //       ...state,
    //       status: 'fulfilled',
    //       currentUser: { guest: action.payload.user },
    //     };
    //   }
    //   if (action.payload.message === 'Wrong email or password') {
    //     return {
    //       ...state,
    //       status: 'rejected',
    //       checkUser: action.payload,
    //     };
    //   }
    // },
    [checkUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [loginUser.pending]: state => {
      state.status = 'loading';
    },
    [loginUser.rejected]: state => {
      state.error = 'Error with your info';
      state.state = 'wrong';
    },

    [loginUser.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.currentUser = action.payload.username;
      state.profile_type = action.payload.profile_type;
    },
    [logoutUser.fulfilled]: () => defaultState,
  },
});

export default usersSlice.reducer;
