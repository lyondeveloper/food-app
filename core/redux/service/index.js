/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const serviceSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

const { actions, reducer } = serviceSlice;

export const counterActions = actions;

export default reducer;
