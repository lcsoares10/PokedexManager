import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import Routes from './routes'
import NavTheme from './components/NavTheme'
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector((state: any) => state.theme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      <NavTheme />
    </ThemeProvider>
  )
}

export default App
