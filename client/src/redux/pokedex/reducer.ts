import { pokemonType } from '../../services/graphql/api/types/pokemon'
import * as Actions from './actions'
const initialState = {
  pokedex:
    localStorage.getItem('pokedex') === null
      ? []
      : JSON.parse(localStorage.getItem('pokedex') as string)
}

export const pokedexReducer = (
  state = initialState,
  action: Actions.pokemonAction
): typeof initialState => {
  let pokedex: any =
    localStorage.getItem('pokedex') === null
      ? []
      : JSON.parse(localStorage.getItem('pokedex') as string)
  if (!pokedex) {
    localStorage.setItem('pokedex', '[]')
  }

  switch (action.type) {
    case Actions.ADD_POKEMON:
      if (
        !pokedex.find(
          (pokemon: pokemonType) => pokemon.name === action.payload.name
        )
      ) {
        pokedex.push(action.payload)
        localStorage.setItem('pokedex', JSON.stringify(pokedex))
        state.pokedex = pokedex
        return state
      }
      return pokedex

    case Actions.REMOVE_POKEMON:
      pokedex = pokedex.filter((element: pokemonType) => {
        return element.name !== action.payload.name
      })
      localStorage.setItem('pokedex', JSON.stringify(pokedex))
      state.pokedex = pokedex
      return state

    default:
      return state
  }
}
