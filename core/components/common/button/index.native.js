import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginLeft: 70,
  },
});

const MobileButton = ({ title, onClick }) => {
  return (
    <View style={styles.wrapper}>
      <Button title={title} onPress={onClick} />
    </View>
  );
};

MobileButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MobileButton;
