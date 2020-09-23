import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userRegistration = createAsyncThunk('users/signup', async args => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/signup',
    withCredentials: 'include',
    data: args,
  };
  const response = await axios(options);
  return response.data;
});

const loginUser = createAsyncThunk('user/login', async args => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/login',
    withCredentials: 'include',
    data: args,
  };
  const response = await axios(options);
  return response.data;
});

const logoutUser = createAsyncThunk('user/logout', async () => {
  const options = {
    method: 'DELETE',
    url: 'http://localhost:3000/signout',
    withCredentials: 'include',
  };

  axios(options);
  return '';
});

const checkUser = createAsyncThunk('user/logged', async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:3000/loggeduser',
    withCredentials: 'include',
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
