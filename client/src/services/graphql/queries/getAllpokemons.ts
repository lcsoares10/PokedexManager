import { gql } from 'graphql-request'

const GET_ALL_POKEMONS = gql`
  query getAllPokemons($limit: Int!) {
    pokemons(limit: $limit) {
      count
      results {
        name
        id
        image
      }
      status
    }
  }
`

export default GET_ALL_POKEMONS
