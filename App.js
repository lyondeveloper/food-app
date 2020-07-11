import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import LandingPage from './core/components/landing-page';

import { store } from './core/redux/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar />
        <LandingPage />
      </View>
    </Provider>
  );
};

export default App;
