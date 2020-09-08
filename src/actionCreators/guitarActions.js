import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchGuitars = createAsyncThunk('instruments/guitars', async () => {
  const options = {
    method: 'post',
    url: 'http://localhost:3000/instruments/create',
  };
  const response = await axios(options);
  console.log(response);
  return response;
});

export default fetchGuitars;
