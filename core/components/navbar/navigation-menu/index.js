import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '@chakra-ui/core';
import Overlay from '../../overlay/index';

const NavigationMenu = ({ children }) => {
  return (
    <Overlay>
      <Box backgroundColor="white" color="black" width="50%" position="absolute" right="0">
        <Flex direction="column" align="center" height="100vh">
          {children}
        </Flex>
      </Box>
    </Overlay>
  );
};

NavigationMenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default NavigationMenu;
