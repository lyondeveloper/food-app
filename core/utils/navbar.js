import { MdSearch, MdShoppingCart, MdAccountCircle } from 'react-icons/md';

export const navigation = {
  home: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  account: '/account',
  checkout: '/checkout',
};

export const webNavbar = Object.freeze([
  {
    id: 0,
    label: 'Search',
    name: 'searchBar',
    component: MdSearch,
    type: 'triggerComponent',
    onClick: () => {},
  },

  {
    id: 1,
    label: 'Sign In',
    name: 'signIn',
    type: 'link',
    path: navigation.signIn,
  },
  {
    id: 2,
    label: 'Sign Up',
    name: 'signUp',
    type: 'link',
    path: navigation.signUp,
  },
  {
    id: 3,
    label: 'Cart',
    name: 'cart',
    component: MdShoppingCart,
    type: 'triggerComponent',
    onClick: () => {},
  },
]);

export const webNavbarAuthenticated = Object.freeze([
  {
    id: 0,
    label: 'Search',
    name: 'searchBar',
    component: MdSearch,
    type: 'triggerComponent',
    onClick: () => {},
  },

  {
    id: 1,
    label: 'Account',
    name: 'account',
    component: MdAccountCircle,
    type: 'triggerComponent',
    onClick: () => {},
  },
  {
    id: 2,
    label: 'Cart',
    name: 'cart',
    component: MdShoppingCart,
    type: 'triggerComponent',
    onClick: () => {},
  },
]);
