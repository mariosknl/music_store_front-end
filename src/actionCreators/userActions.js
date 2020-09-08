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

const loginUser = createAsyncThunk('user/login', async args => {
  const options = {
    method: 'GET',
    url: 'http://localhost:3000/login',
    withCredentials: true,
    data: args,
  };
  const response = await axios(options);
  return response.data;
});

const logoutUser = createAsyncThunk('user/logout', async () => {
  const options = {
    method: 'DELETE',
    url: 'http://localhost:3000/logout',
    withCredentials: true,
  };

  axios(options);
  return '';
});

export default { userRegistration, loginUser, logoutUser };
