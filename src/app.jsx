import React, { createContext, useState, useEffect } from "react";
import CSSBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  MuiThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

import THEMES from "./themes/all_themes.js";
import HomePage from "./pages/home.jsx";

export const themeController = createContext();

const useStyles = makeStyles((theme) => ({
  gradientBackground: {
    height: "100vh",
    width: "100%",
    background: `
      linear-gradient(
        180deg,
        ${theme.palette.primary.main} 10%,
        ${theme.palette.secondary.main} 100%
      )`,
  },
}));

const App = () => {
  const style = useStyles();
  const [activeTheme, activateTheme] = useState(THEMES.paper);

  useEffect(() => {
    activateTheme(THEMES.paper);
  }, []);

  return (
    <themeController.Provider value={{ activeTheme, activateTheme }}>
      <MuiThemeProvider theme={createMuiTheme(activeTheme)}>
        <CSSBaseline />
        <div className={style.gradientBackground}>
          <HomePage />
        </div>
      </MuiThemeProvider>
    </themeController.Provider>
  );
};

export default App;
