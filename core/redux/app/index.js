/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import viewOptions from '../../utils/views';

const initialState = {
  isResponsive: false,
  isAuthenticated: true,
  currentView: viewOptions.home,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setState: (state, { payload: { value, key } }) => {
      state[key] = value;
    },

    resetState: (state) => {
      state.isMobile = false;
    },
  },
});

const { actions, reducer } = appSlice;

export const appActions = actions;

export default reducer;
