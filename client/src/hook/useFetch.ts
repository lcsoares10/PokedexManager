import useSWR from 'swr'
import client from '../services/graphql/client'

import { RequestDocument } from 'graphql-request/dist/types'
export function useFetch(queryGraphql: string) {
  const fetcher = async (query: RequestDocument) =>
    await client.request(query, { limit: 1500 })

  const { data, error } = useSWR(queryGraphql, fetcher)
  return { data, error }
}
