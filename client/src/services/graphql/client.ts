import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(`${process.env.ENDPOINT}`, { headers: {} })
export default client
