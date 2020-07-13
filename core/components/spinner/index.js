import React from 'react';
import PropTypes from 'prop-types';
import { Spinner, Flex, Heading, Stack } from '@chakra-ui/core';
import Overlay from '../overlay';

const WebSpinner = ({ withOverlay = false }) => (
  <>
    {withOverlay ? (
      <Overlay>
        <Flex height="100vh" zIndex="20" direction="column" align="center" justify="center">
          <Stack spacing={3}>
            <Spinner m="auto" thickness="4px" speed="1s" color="green.main" size="xl" />
            <Heading color="white" size="sm">
              {' '}
              Loading{' '}
            </Heading>
          </Stack>
        </Flex>
      </Overlay>
    ) : (
      <Flex height="100vh" zIndex="20" direction="column" align="center" justify="center">
        <Spinner m="auto" thickness="4px" speed="1s" color="green.main" size="xl" />
      </Flex>
    )}
  </>
);

WebSpinner.propTypes = {
  withOverlay: PropTypes.bool.isRequired,
};

export default WebSpinner;
