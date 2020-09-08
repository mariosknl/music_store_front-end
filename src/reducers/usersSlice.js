/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import userRegistration from '../actionCreators/userActions';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    username: '',
    password: '',
    password_confirmation: '',
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
  },
});

export default usersSlice.reducer;
