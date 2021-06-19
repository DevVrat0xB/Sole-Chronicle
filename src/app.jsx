import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TopNav from "./components/top_nav.jsx";
import THEMES from "./themes/all_themes.js";
import AppRoutes from "./routes/root.js";

import CSSBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  MuiThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

export const themeController = createContext();

const useStyles = makeStyles((theme) => ({
  gradientBackground: {
    minHeight: "100vh",
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
          <TopNav />
          <BrowserRouter>
            <Switch>
              {AppRoutes.map((route) => {
                const { path, component, exact } = route;
                return (
                  <Route
                    key={path}
                    exact={exact}
                    path={path}
                    component={component}
                  />
                );
              })}
            </Switch>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    </themeController.Provider>
  );
};

export default App;
