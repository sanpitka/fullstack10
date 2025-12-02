import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    paddingBottom: 15,
    paddingLeft: 10,
  },
  tab: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <Pressable>
      <Text style={styles.tab}>Repositories</Text>
    </Pressable>
  </View>
  );
};

export default AppBar;