import { useApolloClient, useQuery } from '@apollo/client/react';
import Constants from 'expo-constants';
import { useContext } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { ME } from '../graphql/queries';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: theme.colors.primary,
    paddingBottom: 10,
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
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
});

const AppBar = () => { 
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const { data } = useQuery(ME, { fetchPolicy: 'cache-and-network' });
  const user = data?.me;
  
  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  }

  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <Pressable key="repositories">
        <Link to="/">
          <Text style={styles.tab}>Repositories</Text>
        </Link>
      </Pressable>
      {!user ? (
      <Pressable key="signin">
        <Link to="/signin">
          <Text style={styles.tab}>Sign In</Text>
        </Link>
      </Pressable>
        ) : (
      <>
        <Pressable key="review">
          <Link to="/review">
            <Text style={styles.tab}>Create a Review</Text>
          </Link>
        </Pressable>
        <Pressable key="signout" onPress={onSignOut}>
          <Text style={styles.tab}>Sign Out</Text>
        </Pressable>
      </>
      )}
    </ScrollView>
  </View>
  );
};

export default AppBar;