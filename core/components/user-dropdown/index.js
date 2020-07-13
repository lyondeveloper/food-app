import React from 'react';
import { Heading } from '@chakra-ui/core';
import NavigationMenu from '../navbar/navigation-menu';

const UserDropdown = () => {
  return (
    <NavigationMenu>
      <Heading as="h3">Hello, Jesus</Heading>

      {/* {webNavbarAuthenticated.map((item) => (
        <MenuItems isResponsive={isResponsive} item={item} />
      ))} */}
    </NavigationMenu>
  );
};

export default UserDropdown;
