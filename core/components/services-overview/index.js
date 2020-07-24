import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Grid, Text } from '@chakra-ui/core';
import { servicesActions } from '../../redux/services';

import Spinner from '../spinner';
import ServicePreview from '../service-preview';

const notFoundText = "Couldn't found any results";

const ServicesOverview = () => {
  const dispatch = useDispatch();

  const { services: { loading, data: services = [] } = {} } = useSelector((state) => state, shallowEqual);

  useEffect(() => {
    dispatch(servicesActions.getServices());
  }, []);

  return (
    <>
      {loading && <Spinner withOverlay />}
      {services.length <= 0 ? (
        <Text>{notFoundText}</Text>
      ) : (
        <Grid gridGap={3} templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr' }}>
          {services.map((service) => (
            <ServicePreview service={service} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default ServicesOverview;
