import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';
import Constants from 'expo-constants';

const APOLLO_URI = Constants.expoConfig.extra.APOLLO_URI;

  const createApolloClient = (authStorage) => {
  const authLink = new SetContextLink(async (_, { headers }) => {
    if (authStorage) {
      try {
        const accessToken = await authStorage.getAccessToken();
        return {
          headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        };
      } catch (e) {
        console.log(e);
        return {
          headers,
        };
      }
    }
  });
  return new ApolloClient({
    link: authLink.concat(
      new HttpLink({
        uri: APOLLO_URI,
      })
    ),
    cache: new InMemoryCache(),
  });
};

/*   return new ApolloClient({
    link: new HttpLink({
      uri: APOLLO_URI,
    }),
    cache: new InMemoryCache(),
  });
}; */

export default createApolloClient;