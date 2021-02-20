import { ThemeType } from '../themes'
export const APPLY_THEME = 'APPLY_THEME'
export type themeAction = {
  type: string
  payload: ThemeType
}

export const applyTheme = (theme: ThemeType): themeAction => {
  return {
    type: APPLY_THEME,
    payload: theme
  }
}
