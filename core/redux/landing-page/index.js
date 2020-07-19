/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isResponsive: false,
  user: {
    isAuthenticated: false,
  },
};

const landingPageSlice = createSlice({
  name: 'landingPage',
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

const { actions, reducer } = landingPageSlice;

export const landingPageActions = actions;

export default reducer;
