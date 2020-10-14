import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCymbals = createAsyncThunk('instruments/cymbals', async () => {
  const options = {
    method: 'GET',
    url: 'https://emusicstoreapi.herokuapp.com/api/v1/instruments/cymbals',
  };
  const response = await axios(options);
  return response.data;
});

export default fetchCymbals;
