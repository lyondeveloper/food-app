import React from 'react';
import { Grid, Box } from '@chakra-ui/core';

import ServicesOverview from '../services-overview';
import SearchBar from '../search-bar';

const Home = () => (
  <Box height="100vh">
    <Grid height="100%" justifyContent="center" align="center" templateRows="50% 50%">
      <Box alignSelf="center">
        <SearchBar />
      </Box>
      <ServicesOverview />
    </Grid>
  </Box>
);

export default Home;
