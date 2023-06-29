import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: 'http://34.117.67.205/graphql',
  cache: new InMemoryCache(),
})
