import React from 'react';
import PropTypes from 'prop-types';

import { Menu, MenuButton, MenuGroup, MenuList, Divider, Flex, Icon, Image } from '@chakra-ui/core';

import WebButton from '../button/index';
import Option from './option';

const Dropdown = ({ menu, onClick, buttonText, buttonColor, imageSrc, imageSize }) => {
  return (
    <Menu>
      <MenuButton p="0">
        <Flex align="center" direction="row">
          <Image rounded="full" src={imageSrc} size={imageSize} />
          <Icon name="chevron-down" />
        </Flex>
      </MenuButton>
      <MenuList color="black">
        <MenuGroup id={menu.id} title={menu.title}>
          {menu.options.map((option) => (
            <Option item={option} />
          ))}
          <Divider />
          <Flex align="center">
            <WebButton title={buttonText} color={buttonColor} onClick={onClick} />
          </Flex>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

Dropdown.propTypes = {
  imageSize: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(PropTypes.any).isRequired,
  onClick: PropTypes.func,
};

Dropdown.defaultProps = {
  onClick: () => {},
};

export default Dropdown;
