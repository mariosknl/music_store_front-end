import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: ['bassGuitars', 'guitars', 'drumkits', 'snares', 'cymbals'],
  },
});

export default listSlice.reducer;
