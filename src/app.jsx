import React, { createContext, useState, useEffect } from "react";
import CSSBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import THEMES from "./themes/all_themes.js";
import HomePage from "./pages/home.jsx";

export const themeController = createContext();

const App = () => {
  const [activeTheme, activateTheme] = useState(THEMES.paper);

  useEffect(() => {
    activateTheme(THEMES.paper);
  }, []);

  return (
    <themeController.Provider value={{ activeTheme, activateTheme }}>
      <MuiThemeProvider theme={createMuiTheme(activeTheme)}>
        <CSSBaseline />
        <HomePage />
      </MuiThemeProvider>
    </themeController.Provider>
  );
};

export default App;
