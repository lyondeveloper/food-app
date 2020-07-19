import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Grid } from '@chakra-ui/core';
import { servicesActions } from '../../redux/services';

import Spinner from '../spinner';

const Services = () => {
  const dispatch = useDispatch();

  const { services: { loading, data: services = [] } = {} } = useSelector((state) => state, shallowEqual);

  useEffect(() => {
    dispatch(servicesActions.getServices());
  }, []);

  return (
    <>
      {loading && <Spinner withOverlay />}
      <Grid templateColumns="25% 25% 25% 25%">
        {services.map((service) => (
          <h1>{service.title}</h1>
        ))}
      </Grid>
    </>
  );
};

export default Services;
