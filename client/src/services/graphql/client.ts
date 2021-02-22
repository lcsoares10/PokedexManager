import { GraphQLClient } from 'graphql-request'
const client = new GraphQLClient(process.env.REACT_APP_ENDPOINT as string, {
  headers: {}
})
export default client
