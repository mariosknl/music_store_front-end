import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userRegistration = createAsyncThunk('users/signup', async args => {
  const options = {
    method: 'POST',
    url: 'https://emusicstoreapi.herokuapp.com/signup',
    withCredentials: true,
    data: args,
  };
  const response = await axios(options);
  return response.data;
});

export const loginUser = createAsyncThunk('user/login', async args => {
  const options = {
    method: 'POST',
    url: 'https://emusicstoreapi.herokuapp.com/login',
    withCredentials: true,
    data: args,
  };
  const response = await axios(options);
  return response.data;
});

export const logoutUser = createAsyncThunk('user/logout', async () => {
  const options = {
    method: 'DELETE',
    url: 'https://emusicstoreapi.herokuapp.com/signout',
    withCredentials: true,
  };

  axios(options);
  return '';
});

export const checkUser = createAsyncThunk('user/logged', async () => {
  const options = {
    method: 'GET',
    url: 'https://emusicstoreapi.herokuapp.com/loggeduser',
    withCredentials: true,
  };
  const response = await axios(options);
  return response.data;
});
