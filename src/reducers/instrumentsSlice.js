/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchInstruments from '../actionCreators/instrumentActions';

const instrumentsSlice = createSlice({
  name: 'instruments',
  initialState: {
    instruments: [],
  },
  reducers: {},
  extraReducers: {
    [fetchInstruments.pending]: state => {
      state.status = 'loading';
    },
    [fetchInstruments.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.instruments = [action.payload];
    },
    [fetchInstruments.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default instrumentsSlice.reducer;
