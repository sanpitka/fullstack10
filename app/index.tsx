import { NativeRouter } from "react-router-native";

import Main from "./Main";
//import createApolloClient from "./utils/apolloClient";

//const apolloClient = createApolloClient();

export default function Index() {
  return (
    <NativeRouter>
      {/* <ApolloProvider client={apolloClient}> */}
        <Main />
      {/* </ApolloProvider> */}
    </NativeRouter>
  );
}
