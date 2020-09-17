import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createInstruments = createAsyncThunk(
  'instruments/new_instrument',
  async args => {
    const options = {
      method: 'POST',
      url: 'https://tranquil-sea-36009.herokuapp.com/instruments/create',
      data: args,
    };
    const response = await axios(options);
    return response.data;
  },
);

export default { createInstruments };
