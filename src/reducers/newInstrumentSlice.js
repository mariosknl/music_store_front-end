/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import createInstrument from '../actionCreators/newInstrumentAction';

const newInstrumentSlice = createSlice({
  name: 'new_instrument',
  initialState: {
    newInstrument: '',
  },
  reducers: {},
  extraReducers: {
    [createInstrument.pending]: state => {
      state.status = 'loading';
    },
    [createInstrument.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.instruments = [...action.payload];
    },
    [createInstrument.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default newInstrumentSlice.reducer;
