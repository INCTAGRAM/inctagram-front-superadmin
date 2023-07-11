import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'http://34.160.131.142/graphql',
})

const authLink = setContext((_, { headers }) => {
  const accessToken = process.env.NEXT_PUBLIC_BASIC_TOKEN

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Basic ${accessToken}` : '',
    },
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
