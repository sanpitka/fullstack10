import { ApolloProvider } from "@apollo/client/react";
import Constants from "expo-constants";
import { NativeRouter } from "react-router-native";

import AuthStorageContext from './contexts/AuthStorageContext';
import Main from "./Main";
import createApolloClient from "./utils/apolloClient";
import AuthStorage from "./utils/authStorage";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const Index = () => {
  console.log(Constants.expoConfig)  

  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
}

export default Index;
