import React from 'react'
import { ThemeProvider } from 'styled-components'
import { fireTheme, waterTheme, darkTheme } from './themes/index'
import GlobalStyle from './styles/global'
import Routes from './routes'

function App() {
  return (
    <ThemeProvider theme={fireTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App
