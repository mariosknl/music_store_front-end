import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createInstruments = createAsyncThunk(
  'instruments/new_instrument',
  async () => {
    const options = {
      method: 'POST',
      url: 'http://localhost:3000/instruments/create',
    };
    const response = await axios(options);
    return response;
  },
);

export default createInstruments;
