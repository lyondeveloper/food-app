import React from 'react';
import { Box, Flex } from '@chakra-ui/core';

import ServicesOverview from '../services-overview';
import SearchBar from '../search-bar';

const Home = () => (
  <Box position="relative" top="78px">
    <Flex direction="column" align="center">
      <SearchBar />
      <ServicesOverview />
    </Flex>
  </Box>
);

export default Home;
