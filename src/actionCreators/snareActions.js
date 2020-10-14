import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchSnares = createAsyncThunk('instruments/snares', async () => {
  const options = {
    method: 'GET',
    url: 'https://emusicstoreapi.herokuapp.com/api/v1/instruments/snares',
  };
  const response = await axios(options);
  return response.data;
});

export default fetchSnares;
