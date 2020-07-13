import React from 'react';
import PropTypes from 'prop-types';
import { FormErrorMessage, FormLabel, FormControl, Input, Stack } from '@chakra-ui/core';

const CustomLabel = ({ field, error, register }) => (
  <FormControl isInvalid={error}>
    <Stack spacing={3}>
      <FormLabel htmlFor={field.name}> {field.labelText} </FormLabel>
      <Input size={field.size} name={field.name} placeholder={field.placeholder} ref={register} />
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </Stack>
  </FormControl>
);

CustomLabel.propTypes = {
  field: PropTypes.objectOf(PropTypes.any).isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CustomLabel;
