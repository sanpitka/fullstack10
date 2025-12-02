import React from 'react';
import { View, StyleSheet, Pressable, ScrollView, Text } from 'react-native';
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
  tab: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    marginLeft: 15,
    marginRight: 15,
  },
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <Pressable>
        <Link to="/">
          <Text style={styles.tab}>Repositories</Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link to="/signin">
          <Text style={styles.tab}>Sign In</Text>
        </Link>
      </Pressable>
    </ScrollView>
  </View>
  );
};

export default AppBar;