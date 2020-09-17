import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCymbals = createAsyncThunk('instruments/cymbals', async () => {
  const options = {
    method: 'GET',
    url: 'https://tranquil-sea-36009.herokuapp.com/instruments/cymbals',
    headers: '*',
  };
  const response = await axios(options);
  return response.data.cymbals;
});

export default fetchCymbals;
