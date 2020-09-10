import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCymbals = createAsyncThunk(
  'instruments/all_instruments',
  async () => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/instruments/cymbals',
    };
    const response = await axios(options);
    return response.data.cymbals;
  },
);

export default fetchCymbals;
