/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCost: 140,
  items: {
    pizzaFamiliar: {
      id: 0,
      label: 'Pizza Familiar',
      name: 'pizzaFamiliar',
      quantity: 1,
      cost: 100,
      childItems: [
        {
          id: 0,
          label: 'Queso Tradicional',
        },
        {
          id: 1,
          label: 'Jamon Tradicional',
        },
        {
          id: 2,
          label: 'Tocineta',
        },
      ],
    },
    pasticho: {
      id: 1,
      label: 'Pasticho',
      name: 'pasticho',
      quantity: 1,
      cost: 40,
      childItems: [
        {
          id: 0,
          label: 'Doble Queso',
        },
        {
          id: 1,
          label: 'Doble Jamon',
        },
        {
          id: 2,
          label: 'Carne de Vaca',
        },
      ],
    },
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItemQuantity: (state, { payload: { item, value } }) => {
      state.items[item].quantity = value;
    },

    resetState: (state) => {
      state.totalCost = 0;
    },
  },
});

const { actions, reducer } = cartSlice;

export const cartActions = actions;

export default reducer;
