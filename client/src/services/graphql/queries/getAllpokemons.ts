import { gql } from 'graphql-request'

const GET_ALL_POKEMONS = gql`
  query getAllPokemons($limit: Int!) {
    pokemons(limit: $limit) {
      count
      next
      previous
      params
      results {
        url
        name
        image
        id
      }
      status
    }
  }
`

export default GET_ALL_POKEMONS
