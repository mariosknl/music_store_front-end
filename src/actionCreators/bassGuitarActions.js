import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchBassGuitars = createAsyncThunk(
  'instruments/bass_guitars',
  async () => {
    const options = {
      method: 'GET',
      url:
        'https://emusicstoreback.herokuapp.com/api/v1/instruments/bass_guitars',
    };
    const response = await axios(options);
    return response.data;
  },
);

export default fetchBassGuitars;
