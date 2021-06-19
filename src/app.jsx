import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TopNav from "./components/top_nav.jsx";
import Menu from "./components/menu.jsx";
import THEMES from "./themes/all_themes.js";
import AppRoutes from "./routes/root.js";

import CSSBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

export const themeController = createContext();
export const menuController = createContext();

const App = () => {
  const [activeTheme, activateTheme] = useState(THEMES.paper);
  const [fadedIn, fadeInMenu] = useState(false);

  useEffect(() => {
    activateTheme(THEMES.paper);
  }, []);

  return (
    <themeController.Provider value={{ activeTheme, activateTheme }}>
      <MuiThemeProvider theme={createMuiTheme(activeTheme)}>
        <CSSBaseline />
        <Menu fadeIn={fadedIn} />
        <menuController.Provider value={fadeInMenu}>
          <TopNav />
        </menuController.Provider>

        {/* All pages will render here. */}
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
      </MuiThemeProvider>
    </themeController.Provider>
  );
};

export default App;
