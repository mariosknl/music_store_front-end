import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchDrumkits = createAsyncThunk('instruments/drumkits', async () => {
  const options = {
    method: 'GET',
    url: 'https://tranquil-sea-36009.herokuapp.com/instruments/drumkits',
  };
  const response = await axios(options);
  return response.data.drumkits;
});

export default fetchDrumkits;
