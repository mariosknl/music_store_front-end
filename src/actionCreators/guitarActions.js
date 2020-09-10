import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchGuitars = createAsyncThunk('instruments/guitars', async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:3000/instruments/guitars',
  };
  const response = await axios(options);
  return response.data.guitars;
});

export default fetchGuitars;
