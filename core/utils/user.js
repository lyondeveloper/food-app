import { MdAccountCircle, MdSettingsBrightness, MdWork } from 'react-icons/md';

const userDropdownMenu = {
  title: 'My Profile',
  type: 'menuGroup',
  icon: MdAccountCircle,
  options: [
    {
      id: 0,
      label: 'Account',
      name: 'account',
      icon: MdAccountCircle,
    },

    {
      id: 1,
      label: 'Orders',
      name: 'orders',
      icon: MdWork,
    },
    {
      id: 2,
      label: 'Settings',
      name: 'settings',
      icon: MdSettingsBrightness,
    },
  ],
};

export default userDropdownMenu;
