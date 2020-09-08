import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userRegistration = createAsyncThunk('users/signup', async args => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/registrations',
    withCredentials: true,
    data: args,
  };
  const response = await axios(options);
  return response.data;
});

export default { userRegistration };
