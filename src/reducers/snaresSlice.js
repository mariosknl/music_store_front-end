/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchSnares from '../actionCreators/snareActions';

const snaresSlice = createSlice({
  name: 'snares',
  initialState: {
    snares: [],
  },
  reducers: {},
  extraReducers: {
    [fetchSnares.pending]: state => {
      state.status = 'loading';
    },
    [fetchSnares.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.snares = [action.payload];
    },
    [fetchSnares.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default snaresSlice.reducer;
