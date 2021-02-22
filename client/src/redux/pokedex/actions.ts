export const ADD_POKEMON = 'ADD_POKEMON'
export const REMOVE_POKEMON = 'REMOVE_POKEMON'

export type pokemon = {
  name: string
  types: string
  image: string
}

export type pokemonAction = {
  type: string
  payload: pokemon
}

export const addPokemon = (pokemon: pokemon): pokemonAction => {
  return {
    type: ADD_POKEMON,
    payload: pokemon
  }
}

export const removePokemon = (pokemon: pokemon): pokemonAction => {
  return {
    type: REMOVE_POKEMON,
    payload: pokemon
  }
}
