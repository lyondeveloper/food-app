import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Button from '../../../../core/components/common/button/index';
import Form from '../../../../core/components/common/form';
import { counterActions } from '../../../../core/redux/user';
import exampleLayout from '../../../../core/utils/example-layout';

const LandingPage = () => {
  // With this approach,
  // We don't need connect, mapDispatchToState, mapDispatchToProps
  const dispatch = useDispatch();
  const onClick = () => dispatch(counterActions.increment());
  const { user } = useSelector((state) => state, shallowEqual);

  return (
    <div>
      <Form title="Example Form" fields={exampleLayout} />
      <Button title="Hola" onClick={onClick} />
      <h3>{user.value}</h3>
    </div>
  );
};

export default LandingPage;
