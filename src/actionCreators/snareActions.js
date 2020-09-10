import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchSnares = createAsyncThunk('instruments/snares', async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:3000/instruments/snares',
  };
  const response = await axios(options);
  return response.data.all_instrument;
});

export default fetchSnares;
