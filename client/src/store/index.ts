import { createStore, combineReducers } from 'redux'
import { themeReducer } from '../redux/theme/reducer'
import { pokedexReducer } from '../redux/pokedex/reducer'

const rootReducer = combineReducers({
  themeReducer,
  pokedexReducer
})

const store = createStore(rootReducer)
export default store
