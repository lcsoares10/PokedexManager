import React from 'react'
import { ThemeProvider } from 'styled-components'
import { fireTheme, waterTheme, darkTheme } from './themes/index'
import GlobalStyle from './styles/global'
import Routes from './routes'
import NavTheme from './components/NavTheme'

function App() {
  return (
    <ThemeProvider theme={waterTheme}>
      <GlobalStyle />
      <Routes />
      <NavTheme />
    </ThemeProvider>
  )
}

export default App
