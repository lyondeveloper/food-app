import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link as ReachLink } from '@reach/router';
import { Heading, Flex, Box, Link } from '@chakra-ui/core';

import { navigation, webNavbarAuthenticated, webNavbar } from '../../utils/navbar';
import WebNavbarItems from './web-navbar-items';

const WebNavbar = () => {
  const { landingPage: { isResponsive, user: { isAuthenticated } = {} } = {} } = useSelector(
    (state) => state,
    shallowEqual,
  );

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
    <Flex align="center" justify="space-between" as="nav" wrap="wrap" padding="1.5rem" bg="green.main" color="white">
      <Flex align="center">
        <Heading as="h1" size="lg">
          <Link as={ReachLink} to={navigation.home}>
            Local Deli
          </Link>
        </Heading>
      </Flex>

      {isResponsive ? <Box display={{ base: 'flex', md: 'none' }}>{render()}</Box> : <Flex>{render()}</Flex>}
    </Flex>
  );
};

export default WebNavbar;
