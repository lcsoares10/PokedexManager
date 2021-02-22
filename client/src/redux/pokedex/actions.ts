export const ADD_POKEMON = 'ADD_POKEMON'
export const REMOVE_POKEMON = 'REMOVE_POKEMON'

export type pokemonName = {
  name: string
}

export type pokemonAction = {
  type: string
  payload: pokemonName
}

export const addPokemon = (pokemon: pokemonName): pokemonAction => {
  return {
    type: ADD_POKEMON,
    payload: pokemon
  }
}

export const removePokemon = (pokemon: pokemonName): pokemonAction => {
  return {
    type: REMOVE_POKEMON,
    payload: pokemon
  }
}
