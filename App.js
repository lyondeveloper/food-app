import { StatusBar } from "expo-status-bar";
import React from "react";
import MobileButton from "./core/components/button/container";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <MobileButton />
      <Text> hola </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
