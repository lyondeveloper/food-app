import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Heading } from '@chakra-ui/core';

const DropdownOption = ({ item }) => {
  const Icon = item.icon;
  return (
    <MenuItem paddingLeft="10px" minH="48px">
      <Icon size="24px" />
      <Heading fontWeight="normal" paddingLeft="10px" as="span" size="16px">
        {' '}
        {item.label}{' '}
      </Heading>
    </MenuItem>
  );
};

DropdownOption.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DropdownOption;
