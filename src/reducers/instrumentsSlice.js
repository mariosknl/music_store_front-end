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
    [fetchGuitars.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.guitars = [...action.payload];
    },
    [fetchGuitars.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default guitarsSlice.reducer;
