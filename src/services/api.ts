import { ApolloClient, InMemoryCache } from '@apollo/client'

const api = new ApolloClient({
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
  cache: new InMemoryCache()
})

export default api;
