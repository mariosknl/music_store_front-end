import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createLike = createAsyncThunk('likes/instruments', async args => {
  const options = {
    method: 'POST',
    url: `https://emusicstoreapi.herokuapp.com/api/v1/instruments/${args}/likes`,
    data: args,
    withCredentials: true,
  };
  const response = await axios(options);
  return response.data;
});

export default { createLike };
