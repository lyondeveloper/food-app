import React from 'react';
import PropTypes from 'prop-types';

import { Link as ReachLink } from '@reach/router';

import { Box, Image, Heading, Text, Grid, Badge, Flex, Link } from '@chakra-ui/core';

const ServicePreview = ({ service }) => {
  const daysCapitalize = `${service.schedule.fromDay[0].toUpperCase() + service.schedule.fromDay.slice(1)} to ${
    service.schedule.toDay[0].toUpperCase() + service.schedule.toDay.slice(1)
  }`;

  const hoursCapitalize = `${service.schedule.fromHour.toUpperCase()} to ${service.schedule.toHour.toUpperCase()}`;
  return (
    <Box
      maxW="sm"
      backgroundColor="green.main"
      color="white"
      width="300px"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      maxH="400px"
    >
      <Link to={`/service/${service.slug}`} as={ReachLink} _hover={{ textDecoration: 'none' }}>
        <Image src="https://bit.ly/2Z4KKcF" />

        <Grid templateRows="1fr 1fr 1fr" direction="column" paddingX="10px">
          <Flex align="flex-start" direction="column">
            <Heading fontSize="20px" mt="1" fontWeight="bold" as="span">
              {service.title}
            </Heading>
            <Text as="span" fontSize="16px">
              {service.direction.label}
            </Text>
            <Text fontWeight="bold" as="small" color="grey.600">
              {service.foodType.label}
            </Text>
          </Flex>

          <Text alignSelf="center" as="span" fontSize="16px">
            Delivery Cost:
            {service.deliveryCost === 0 ? (
              <Badge color="blue.main" ml="5px">
                Free
              </Badge>
            ) : (
              <Text fontWeight="bold" ml="5px" as="span">
                {service.deliveryCost}
              </Text>
            )}
          </Text>
          <Flex direction="column">
            <Text fontWeight="bold">{daysCapitalize}</Text>
            <Text fontWeight="bold">{hoursCapitalize}</Text>
          </Flex>
        </Grid>
      </Link>
    </Box>
  );
};

ServicePreview.propTypes = {
  service: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ServicePreview;
