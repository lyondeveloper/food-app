import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Button from '../../../../core/components/common/button/index';
import { counterActions } from '../../../../core/redux/user';

const LandingPage = () => {
  // With this approach,
  // We don't need connect, mapDispatchToState, mapDispatchToProps
  const dispatch = useDispatch();
  const onClick = () => dispatch(counterActions.increment());
  const { user } = useSelector((state) => state, shallowEqual);

  return (
    <div>
      <Button title="Hola" onClick={onClick} />
      <h3>{user.value}</h3>
    </div>
  );
};

export default LandingPage;
