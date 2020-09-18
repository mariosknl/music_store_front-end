import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createLike = createAsyncThunk('likes/instruments', async args => {
  const options = {
    method: 'POST',
    url:
      'https://tranquil-sea-36009.herokuapp.com/instruments/:instrument_id/likes',
    data: args,
  };
  const response = await axios(options);
  return response.data;
});

export default { createLike };
