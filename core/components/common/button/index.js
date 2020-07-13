import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/core';

const WebButton = ({ title, isLoading }) => {
  return (
    <Button color="white" backgroundColor="green.main" isLoading={isLoading} type="submit">
      {' '}
      {title}{' '}
    </Button>
  );
};

WebButton.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};

WebButton.defaultProps = {
  isLoading: false,
};

export default WebButton;
