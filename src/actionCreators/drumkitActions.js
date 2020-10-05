import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchDrumkits = createAsyncThunk('instruments/drumkits', async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:3000/api/v1/instruments/drumkits',
  };
  const response = await axios(options);
  return response.data;
});

export default fetchDrumkits;
