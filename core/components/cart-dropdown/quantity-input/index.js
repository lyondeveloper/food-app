import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  Stack,
} from '@chakra-ui/core';

import { cartActions } from '../../../redux/cart';

const QuantityInput = ({ field }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(field.quantity);

  const onChange = (val) => {
    setValue(val);
  };

  useEffect(() => {
    dispatch(cartActions.setItemQuantity({ item: field.name, value }));
  }, [value]);

  return (
    <Stack isInline>
      <NumberInput onChange={onChange} width="60px" size="sm" value={value} min={0} defaultValue={field.quantity}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Stack>
  );
};

QuantityInput.propTypes = {
  field: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default QuantityInput;
