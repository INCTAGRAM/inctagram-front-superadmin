import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://34.118.88.29:7000/graphql',
    fetchOptions: {
      mode: 'no-cors',
    },
  }),
  cache: new InMemoryCache(),
})

// export const apolloClient = new ApolloClient({
//   uri: 'http://34.118.88.29:7000/graphql',
//   cache: new InMemoryCache(),
// })
