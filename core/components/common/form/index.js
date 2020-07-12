import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Heading, Flex } from '@chakra-ui/core';
import CustomLabel from './label';
import CustomButton from '../button';

const Form = ({ fields, title }) => {
  const { handleSubmit, errors, register, formState } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  const validateField = (value) => {
    let error;
    if (!value) error = 'This field is required';
    return error || true;
  };

  return (
    <Flex
      width="50%"
      m="auto"
      align="center"
      justify="center"
      direction="column"
      p="20px"
      border="1px"
      borderRadius="md"
      borderColor="gray.200"
    >
      <Heading mb="25px"> {title} </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" justify="center">
          {fields.map((field) => (
            <CustomLabel field={field} error={errors[field.name]} register={register({ validate: validateField })} />
          ))}

          <CustomButton title="Submit" isLoading={formState.isSubmitting} />
        </Flex>
      </form>
    </Flex>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
};

export default Form;
