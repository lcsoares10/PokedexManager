import useSWR from 'swr'
import client from '../services/graphql/client'

import { RequestDocument } from 'graphql-request/dist/types'
export function useFetch(queryGraphql: string, variables: any) {
  const fetcher = async (query: RequestDocument) =>
    await client.request(query, variables)

  const { data, error } = useSWR(queryGraphql, fetcher)
  return { data, error }
}
