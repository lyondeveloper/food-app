import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import LabelGroup from '../common/form/label-group/index';
import { layout, data } from '../../utils/globalSearch';
import { servicesActions } from '../../redux/services';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = ({ globalSearch: value }) => {
    dispatch(servicesActions.getServices(value));
  };

  const validateField = (value) => {
    let error;
    if (value.length <= 0) error = 'Please add some parameter';
    return error || true;
  };

  return (
    <form>
      <LabelGroup
        onSubmit={handleSubmit(onSubmit)}
        field={data}
        layout={layout}
        error={errors[data.name]}
        register={register({ validate: validateField })}
      />
    </form>
  );
};

export default SearchBar;
