import { ApolloProvider } from "@apollo/client/react";
import Constants from "expo-constants";
import { NativeRouter } from "react-router-native";

import Main from "./Main";
import createApolloClient from "./utils/apolloClient";

const apolloClient = createApolloClient();

const Index = () => {
  console.log(Constants.expoConfig)  

  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
}

export default Index;
