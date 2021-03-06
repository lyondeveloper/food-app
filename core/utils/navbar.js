import { MdShoppingCart, MdAccountCircle, MdDescription } from 'react-icons/md';
import userMenu from './user';

export const navigation = {
  home: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  account: '/account',
  checkout: '/checkout',
  orders: '/orders',
};

export const constants = {
  triggerComponent: 'triggerComponent',
  link: 'link',
  dropdown: 'dropdown',
  cart: 'cart',
};

const cartMenu = {
  title: 'Your Order',
  serviceName: 'Melt Pizzas',
  serviceType: 'food',
  type: 'menuGroup',
  id: 0,
};

export const webNavbar = Object.freeze([
  {
    id: 0,
    label: 'Orders',
    name: 'orders',
    component: MdDescription,
    type: constants.link,
    path: navigation.orders,
  },

  {
    id: 1,
    label: 'Cart',
    name: 'cart',
    component: MdShoppingCart,
    type: constants.cart,
    onClick: () => {},
    childMenu: { ...cartMenu },
  },

  {
    id: 2,
    label: 'Sign In',
    name: 'signIn',
    component: MdAccountCircle,
    type: constants.link,
    path: navigation.signIn,
  },
]);

export const webNavbarAuthenticated = Object.freeze([
  {
    id: 0,
    label: 'Orders',
    name: 'orders',
    component: MdDescription,
    type: constants.link,
    path: navigation.orders,
  },
  {
    id: 1,
    label: 'Cart',
    name: 'cart',
    component: MdShoppingCart,
    type: constants.cart,
    onClick: () => {},
    childMenu: { ...cartMenu },
  },

  {
    id: 2,
    label: 'Account',
    name: 'account',
    component: MdAccountCircle,
    type: constants.dropdown,
    onClick: () => {},
    childMenu: { ...userMenu },
  },

  {
    id: 3,
    label: 'Orders',
    name: 'orders',
    component: MdDescription,
    path: navigation.orders,
    type: constants.link,
  },
]);
