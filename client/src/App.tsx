import React from "react";
import { ThemeProvider } from "styled-components";
import { fireTheme, waterTheme, darkTheme } from "./themes/index";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={fireTheme}>
      <GlobalStyle />
      <div className="App">
        <div>
          <h1>teste</h1>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
