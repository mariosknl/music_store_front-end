import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchGuitars = createAsyncThunk('instruments/guitars', async () => {
  const options = {
    method: 'GET',
    url: 'https://emusicstoreapi.herokuapp.com/api/v1/instruments/guitars',
  };
  const response = await axios(options);
  return response.data;
});

export default fetchGuitars;
