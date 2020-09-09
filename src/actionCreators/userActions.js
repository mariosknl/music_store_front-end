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
    method: 'POST',
    url: 'http://localhost:3000/sessions',
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

const currentUser = createAsyncThunk('user/logged_in', async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:3000/logged_in',
    withCredentials: true,
  };
  const response = await axios(options);
  return response.data;
});

export default {
  userRegistration,
  loginUser,
  logoutUser,
  currentUser,
};
