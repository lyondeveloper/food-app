import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/core';

const WebButton = ({ title, onClick }) => {
  return (
    <div>
      <Button variantColor="green" onClick={onClick}>
        {title}
      </Button>
    </div>
  );
};

WebButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default WebButton;
