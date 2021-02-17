import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  outline: 0;
  transition: 0.1s;
  font-size:62%;
} 

body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background:${props => props.theme.background};
  width:100vw;
  height:100%;
  overflow-x: hidden;
}

`
