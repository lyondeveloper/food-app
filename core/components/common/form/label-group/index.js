import React from 'react';
import PropTypes from 'prop-types';
import { MdClear } from 'react-icons/md';
import { InputGroup, InputLeftElement, Input, FormControl, InputRightElement } from '@chakra-ui/core';

const LabelGroup = ({ onSubmit, field, register, layout, error, onClear }) => {
  const Icon = layout.icon;

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <FormControl isInvalid={error}>
      <InputGroup my="40px" width={layout.width}>
        <InputLeftElement>
          <Icon size="24px" name={field.name} color={layout.iconColor} />
        </InputLeftElement>
        <Input onKeyPress={onKeyPress} placeholder={field.placeholder} ref={register} name={field.name} />
        <InputRightElement>
          <MdClear onClick={onClear} size="24px" name={field.name} color={layout.iconColor} />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

LabelGroup.propTypes = {
  layout: PropTypes.objectOf(PropTypes.any).isRequired,
  field: PropTypes.objectOf(PropTypes.any).isRequired,
  error: PropTypes.objectOf(PropTypes.string).isRequired,
  register: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default LabelGroup;
