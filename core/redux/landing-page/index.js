/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isResponsive: false,
};

const landingPage = createSlice({
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

const { actions, reducer } = landingPage;

export const landingPageActions = actions;

export default reducer;
