import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_TOKEN_APOLLO_CLIENT}`,
  },
  cache: new InMemoryCache({}),
});
