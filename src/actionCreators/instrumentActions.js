import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchInstruments = createAsyncThunk(
  'instruments/all_instruments',
  async () => {
    const options = {
      method: 'GET',
      url: 'https://tranquil-sea-36009.herokuapp.com/instruments/index',
      headers: {
        all_instruments: 'all_instruments',
      },
    };
    const response = await axios(options);
    return response.data.all_instrument;
  },
);

export default fetchInstruments;
