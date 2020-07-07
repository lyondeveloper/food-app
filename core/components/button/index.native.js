import React from "react";
import { View, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginLeft: 70,
  },
});

const MobileButton = () => {
  return (
    <View style={styles.wrapper}>
      <Button title="Mobile Button" />
    </View>
  );
};

export default MobileButton;
