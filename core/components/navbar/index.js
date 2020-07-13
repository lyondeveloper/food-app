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

      {/* <Box as="button" display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <svg color="white" fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
      {show ? (

      ) : (
        <Box
          display={{ sm: show ? 'block' : 'none', md: 'flex' }}
          width={{ sm: 'full', md: 'auto' }}
          alignItems="center"
          justifyContent="flex-end"
          flexGrow={1}
        >
          {webNavbarAuthenticated.map((item) => (
            <MenuItems item={item} />
          ))}
        </Box>
      )} */}
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
