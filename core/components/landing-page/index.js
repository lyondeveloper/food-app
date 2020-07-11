import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { counterActions } from '../../redux/user';

import MobileButton from '../common/button/index';

const LandingPage = () => {
  // With this approach,
  // We don't need connect, mapDispatchToState, mapDispatchToProps
  const dispatch = useDispatch();
  const onClick = () => dispatch(counterActions.increment());
  const { user } = useSelector((state) => state, shallowEqual);

  return (
    <View>
      <MobileButton title="Mobile View" onClick={onClick} />
      <Text>{user.value}</Text>
    </View>
  );
};

export default LandingPage;
