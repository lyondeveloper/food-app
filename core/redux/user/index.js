// do not remove this eslint-disable
// reducer slice example, please update this with
// respective code related to app itself.
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const accountSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

const { actions, reducer } = accountSlice;

export const counterActions = actions;

export default reducer;
