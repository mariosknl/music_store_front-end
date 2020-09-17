import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchSnares = createAsyncThunk('instruments/snares', async () => {
  const options = {
    method: 'GET',
    url: 'https://tranquil-sea-36009.herokuapp.com/instruments/snares',
  };
  const response = await axios(options);
  return response.data.snares;
});

export default fetchSnares;
