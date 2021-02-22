import * as Actions from './actions'
import { darkTheme } from '../../themes'

const initialState = {
  theme: darkTheme
}

export const themeReducer = (
  state = initialState,
  action: Actions.themeAction
): typeof initialState => {
  const themeLocalStorage = JSON.parse(localStorage.getItem('theme') as string)
  const theme = !themeLocalStorage ? initialState : { theme: themeLocalStorage }

  switch (action.type) {
    case Actions.APPLY_THEME:
      localStorage.setItem('theme', JSON.stringify(action.payload))
      return { theme: action.payload }

    default:
      return theme
  }
}
