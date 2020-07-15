import React from 'react';
import PropTypes from 'prop-types';

import { Menu, MenuButton, MenuGroup, Button, MenuList, Divider, Flex } from '@chakra-ui/core';

import WebButton from '../button/index';
import Option from './option';

const Dropdown = ({ title, menu, onClick }) => {
  const MenuIcon = menu.icon;

  return (
    <Menu>
      <MenuIcon size="24px" />
      <MenuButton p="0" _hover={{ bg: 'none' }} backgroundColor="none" as={Button} rightIcon="chevron-down">
        {title}
      </MenuButton>
      <MenuList color="black">
        <MenuGroup id={menu.id} title={menu.title}>
          {menu.options.map((option) => (
            <Option item={option} />
          ))}
          <Divider />
          <Flex align="center">
            <WebButton title="Logout" color="white" onClick={onClick} />
          </Flex>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(PropTypes.any).isRequired,
  onClick: PropTypes.func,
};

Dropdown.defaultProps = {
  onClick: () => {},
};

export default Dropdown;
