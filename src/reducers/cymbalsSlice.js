/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchCymbals from '../actionCreators/cymbalActions';

const cymbalsSlice = createSlice({
  name: 'cymbals',
  initialState: {
    cymbals: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCymbals.pending]: state => {
      state.status = 'loading';
    },
    [fetchCymbals.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.cymbals = [action.payload];
    },
    [fetchCymbals.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default cymbalsSlice.reducer;
