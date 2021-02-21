import { useFetch } from '../hook/useFetch'
import GET_ALL_POKEMONS from '../services/graphql/queries/getAllpokemons'

import {
  pokemonType,
  pokemonListType
} from '../services/graphql/api/types/pokemon'

function searchPokemon(search: string): Array<pokemonType> {
  const { data, error } = useFetch(GET_ALL_POKEMONS, { limit: 1500 })
  const searchclean = search.trim().toLowerCase()

  if (!data) {
    return []
  }

  const pokemons: pokemonListType = { ...data.pokemons }

  if (searchclean.length === 0) {
    return pokemons.results.filter((pokemon: pokemonType) => {
      return pokemon.id < 12 ? pokemon : ''
    })
  }

  return pokemons.results.filter((pokemon: pokemonType) => {
    return pokemon.name.indexOf(search) !== -1
  })
}
export default searchPokemon
