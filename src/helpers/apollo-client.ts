import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: 'http://34.118.88.29:7000/graphql',
  cache: new InMemoryCache(),
})
