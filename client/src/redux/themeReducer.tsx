import * as Actions from './themeActions'
import { darkTheme } from '../themes'
const initialState = {
  theme: darkTheme
}
export const themeReducer = (
  state = initialState,
  action: Actions.themeAction
): typeof initialState => {
  switch (action.type) {
    case Actions.APPLY_THEME:
      return { theme: action.payload }
    default:
      return state
  }
}
