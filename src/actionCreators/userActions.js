import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchGuitars = createAsyncThunk('instruments/guitars', async () => {
  const options = {
    method: 'get',
    url: 'http://localhost:3000/instruments/create',
  };
  const response = await axios(options);
  return response.data;
});

export default { fetchGuitars };
