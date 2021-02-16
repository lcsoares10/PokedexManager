import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  outline: 0;
  transition: 0.1s;
} 

body{
  font-family:  'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;
      background:${props => props.theme.background};
  width:100vw;
  height:100vh;
    
}

`
