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
      if (!pokedex.find((name: string) => name === action.payload.name)) {
        pokedex.push(action.payload.name)
        localStorage.setItem('pokedex', JSON.stringify(pokedex))
        state.pokedex = pokedex
        return state
      }
      return pokedex

    case Actions.REMOVE_POKEMON:
      pokedex = pokedex.filter((element: string) => {
        return element !== action.payload.name
      })
      localStorage.setItem('pokedex', JSON.stringify(pokedex))
      state.pokedex = pokedex
      return state

    default:
      return state
  }
}
