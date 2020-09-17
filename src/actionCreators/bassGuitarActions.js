import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchBassGuitars = createAsyncThunk(
  'instruments/bass_guitars',
  async () => {
    const options = {
      method: 'GET',
      url: 'https://tranquil-sea-36009.herokuapp.com/instruments/bass_guitars',
    };
    const response = await axios(options);
    return response.data.bass_guitars;
  },
);

export default fetchBassGuitars;
