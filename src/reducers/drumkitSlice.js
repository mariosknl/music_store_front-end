/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchDrumkits from '../actionCreators/drumkitActions';

const drumkitSlice = createSlice({
  name: 'drumkits',
  initialState: {
    drumkits: [],
  },
  reducers: {},
  extraReducers: {
    [fetchDrumkits.pending]: state => {
      state.status = 'loading';
    },
    [fetchDrumkits.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.bass_guitars = [...action.payload];
    },
    [fetchDrumkits.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default drumkitSlice.reducer;
