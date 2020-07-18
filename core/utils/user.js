import { MdAccountCircle, MdSettingsBrightness, MdWork } from 'react-icons/md';

const userMenu = {
  title: 'My Profile',
  type: 'menuGroup',
  icon: MdAccountCircle,
  options: [
    {
      id: 0,
      label: 'Account',
      name: 'account',
      path: '/account',
      icon: MdAccountCircle,
    },

    {
      id: 1,
      label: 'Orders',
      name: 'orders',
      path: '/orders',
      icon: MdWork,
    },
    {
      id: 2,
      label: 'Settings',
      name: 'settings',
      path: '/settings',
      icon: MdSettingsBrightness,
    },
  ],
};

export default userMenu;
