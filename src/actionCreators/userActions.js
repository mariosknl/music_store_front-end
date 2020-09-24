import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userRegistration = createAsyncThunk('users/signup', async args => {
  const options = {
    method: 'POST',
    url: 'https://emusicstoreback.herokuapp.com/signup',
    withCredentials: 'include',
    data: args,
  };
  const response = await axios(options);
  return response.data;
});

const loginUser = createAsyncThunk('user/login', async args => {
  const options = {
    method: 'POST',
    url: 'https://emusicstoreback.herokuapp.com/login',
    withCredentials: 'include',
    data: args,
  };
  const response = await axios(options);
  return response.data;
});

const logoutUser = createAsyncThunk('user/logout', async () => {
  const options = {
    method: 'DELETE',
    url: 'https://emusicstoreback.herokuapp.com/signout',
    withCredentials: 'include',
  };

  axios(options);
  return '';
});

const checkUser = createAsyncThunk('user/logged', async () => {
  const options = {
    method: 'GET',
    url: 'https://emusicstoreback.herokuapp.com/loggeduser',
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
