import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link as ReachLink } from '@reach/router';
import { Heading, Flex, Box, Link } from '@chakra-ui/core';

import { navigation, webNavbarAuthenticated, webNavbar } from '../../utils/navbar';
import WebNavbarItems from './web-navbar-items';

const WebNavbar = () => {
  const { app: { isResponsive, isAuthenticated } = {} } = useSelector((state) => state, shallowEqual);

  const render = () => (
    <>
      {isAuthenticated ? (
        <>
          {webNavbarAuthenticated.map((item) => (
            <WebNavbarItems isResponsive={isResponsive} item={item} />
          ))}
        </>
      ) : (
        <>
          {webNavbar.map((item) => (
            <WebNavbarItems isResponsive={isResponsive} item={item} />
          ))}
        </>
      )}
    </>
  );

  return (
    <Flex
      as="nav"
      wrap="wrap"
      align="center"
      justifyContent="space-between"
      width="100%"
      bg="green.main"
      color="white"
      padding="1.5rem"
      position="fixed"
      zIndex="10"
    >
      <Heading as="h1" size="lg">
        <Link as={ReachLink} to={navigation.home}>
          Local Deli
        </Link>
      </Heading>
      {isResponsive ? <Box display={{ base: 'flex', md: 'none' }}>{render()}</Box> : <Flex>{render()}</Flex>}
    </Flex>
  );
};

export default WebNavbar;
