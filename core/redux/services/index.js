/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    getServices: (state) => {
      state.loading = true;
      state.error = null;
    },
    getServicesSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    getServicesError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    resetState: (state) => {
      state.services = [];
      state.loading = false;
      state.error = null;
    },
  },
});

const { actions, reducer } = servicesSlice;

export const servicesActions = actions;

export default reducer;
