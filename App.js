/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import RootNavigator from './src/navigators/root';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#fff',
  }
});

export default App;
