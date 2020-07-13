import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link as ReachLink } from '@reach/router';
import { Heading, Flex, Box, Link } from '@chakra-ui/core';

import { navigation, webNavbarAuthenticated } from '../../utils/navbar';
import WebNavbarItems from './web-navbar-items';

const WebNavbar = () => {
  const { landingPage: { isResponsive } = {} } = useSelector((state) => state, shallowEqual);

  const renderAuthenticated = () => (
    <>
      {isResponsive ? (
        <Box display={{ base: 'flex', md: 'none' }}>
          {webNavbarAuthenticated.map((item) => (
            <WebNavbarItems isResponsive={isResponsive} item={item} />
          ))}
        </Box>
      ) : (
        <Flex>
          {webNavbarAuthenticated.map((item) => (
            <WebNavbarItems isResponsive={isResponsive} item={item} />
          ))}
        </Flex>
      )}
    </>
  );

  return (
    <Flex align="center" justify="space-between" as="nav" wrap="wrap" padding="1.5rem" bg="green.main" color="white">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          <Link as={ReachLink} to={navigation.home}>
            Local Deli
          </Link>
        </Heading>
      </Flex>

      {renderAuthenticated()}
    </Flex>
  );
};

export default WebNavbar;
