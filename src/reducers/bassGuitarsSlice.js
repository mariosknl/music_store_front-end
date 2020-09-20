/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchBassGuitars from '../actionCreators/bassGuitarActions';

const bassGuitarsSlice = createSlice({
  name: 'bassGuitars',
  initialState: {
    bassGuitars: [],
  },
  reducers: {},
  extraReducers: {
    [fetchBassGuitars.pending]: state => {
      state.status = 'loading';
    },
    [fetchBassGuitars.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.bassGuitars = [action.payload];
    },
    [fetchBassGuitars.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default bassGuitarsSlice.reducer;
