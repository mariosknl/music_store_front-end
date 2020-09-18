/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import createLike from '../actionCreators/likeActions';

const likeInstrumentSlice = createSlice({
  name: 'new_like',
  initialState: {
    new_like: '',
  },
  reducers: {},
  extraReducers: {
    [createLike.pending]: state => {
      state.status = 'loading';
    },
    [createLike.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.likes = [...action.payload];
    },
    [createLike.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default likeInstrumentSlice.reducer;
