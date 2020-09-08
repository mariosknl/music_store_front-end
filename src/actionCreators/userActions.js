import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userRegistration = createAsyncThunk('users/registrations', async () => {
  const options = {
    method: 'post',
    url: 'http://localhost:3000/registrations',
  };
  const response = await axios(options);
  return response.data;
});

export default { userRegistration };
