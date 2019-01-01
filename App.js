import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationApp from './src/NavigatorApp';

export default class App extends React.Component {
  render() {
    return (
      <NavigationApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
