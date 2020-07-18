import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/core';

const WebButton = ({
  title,
  isLoading = false,
  onClick,
  color = 'white',
  backgroundColor = 'green.main',
  type = 'submit',
}) => (
  <Button m="auto" color={color} backgroundColor={backgroundColor} isLoading={isLoading} onClick={onClick} type={type}>
    {' '}
    {title}{' '}
  </Button>
);

WebButton.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

WebButton.defaultProps = {
  onClick: () => {},
};

export default WebButton;
