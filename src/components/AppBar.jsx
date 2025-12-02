import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 15,
    backgroundColor: theme.colors.primary,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  tab: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
  },
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <Pressable>
      <Link to="/">
      <Text style={styles.title}>Repositories</Text>
      </Link>
    </Pressable>
    <Pressable>
      <Link to="/signin">
      <Text style={styles.tab}>Sign In</Text>
      </Link>
    </Pressable>
  </View>
  );
};

export default AppBar;