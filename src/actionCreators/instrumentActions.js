import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchInstruments = createAsyncThunk(
  'instruments/all_instruments',
  async () => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/instruments/index',
    };
    const response = await axios(options);
    return response.data.all_instrument;
  },
);

export default fetchInstruments;
