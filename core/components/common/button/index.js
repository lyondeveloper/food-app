import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/core';

const WebButton = ({ title, isLoading = false, color = 'white', onClick }) => {
  return (
    <Button
      _hover={{ bg: 'blue.main' }}
      m="auto"
      color={color}
      backgroundColor="green.main"
      isLoading={isLoading}
      onClick={onClick}
      type="submit"
    >
      {' '}
      {title}{' '}
    </Button>
  );
};

WebButton.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

WebButton.defaultProps = {
  onClick: () => {},
};

export default WebButton;
