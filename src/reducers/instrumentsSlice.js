/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchGuitars from '../actionCreators/guitarActions';

const guitarsSlice = createSlice({
  name: 'instruments',
  initialState: {
    guitars: [],
  },
  reducers: {},
  extraReducers: {
    [fetchGuitars.pending]: state => {
      state.status = 'loading';
    },
    [fetchGuitars.fulfilled]: state => {
      state.status = 'succeeded';
    },
    [fetchGuitars.rejected]: state => {
      state.status = 'failed';
    },
  },
});

export default guitarsSlice.reducer;
