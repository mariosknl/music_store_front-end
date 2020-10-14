/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import createLike from '../actionCreators/likeActions';

const likeSlice = createSlice({
  name: 'likes',
  initialState: {
    likes: [],
  },
  reducers: {},
  extraReducers: {
    [createLike.pending]: state => {
      state.status = 'loading';
    },
    [createLike.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.users.likes = [...action.payload];
    },
    [createLike.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default likeSlice.reducer;
