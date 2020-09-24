import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchInstruments = createAsyncThunk(
  'instruments/all_instruments',
  async () => {
    const options = {
      method: 'GET',
      url: 'https://emusicstoreback.herokuapp.com/api/v1/instruments/index',
    };
    const response = await axios(options);
    return response.data;
  },
);

export default fetchInstruments;
