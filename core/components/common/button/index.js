import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/core';

const WebButton = ({ title, isLoading = false }) => {
  return (
    <Button color="white" backgroundColor="#48BB78" isLoading={isLoading} type="submit">
      {' '}
      {title}{' '}
    </Button>
  );
};

WebButton.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default WebButton;
