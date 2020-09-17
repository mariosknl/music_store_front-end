import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userRegistration = createAsyncThunk('users/signup', async args => {
  const options = {
    method: 'POST',
    url: 'https://tranquil-sea-36009.herokuapp.com/registrations',
    withCredentials: true,
    data: args,
  };
  const response = await axios(options);
  return response.data;
});

const loginUser = createAsyncThunk('user/login', async args => {
  const options = {
    method: 'POST',
    url: 'https://tranquil-sea-36009.herokuapp.com/sessions',
    withCredentials: true,
    data: args,
  };
  const response = await axios(options);
  return response.data;
});

const logoutUser = createAsyncThunk('user/logout', async () => {
  const options = {
    method: 'DELETE',
    url: 'https://tranquil-sea-36009.herokuapp.com/logout',
    withCredentials: true,
  };

  axios(options);
  return '';
});

const checkUser = createAsyncThunk('user/logged_in', async () => {
  const options = {
    method: 'GET',
    url: 'https://tranquil-sea-36009.herokuapp.com/logged_in',
    withCredentials: true,
  };
  const response = await axios(options);
  return response.data;
});

export default {
  userRegistration,
  loginUser,
  logoutUser,
  checkUser,
};
