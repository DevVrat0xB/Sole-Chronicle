import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { themeController } from "../app.jsx";
import THEME from "../themes/all_themes.js";

const HomePage = () => {
  const { activeTheme, activateTheme } = useContext(themeController);

  function toggleTheme() {
    console.log("Active Theme: ");
    console.log(activeTheme);
    if (activeTheme === THEME.dark) {
      console.log("Changing to Paper theme...");
      activateTheme(THEME.paper);
    } else {
      console.log("Changing to Dark theme...");
      activateTheme(THEME.dark);
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h2" color="textPrimary">
        This is primary text
      </Typography>
      <Typography variant="h3" color="textSecondary">
        This is secondary text
      </Typography>
      <Button onClick={toggleTheme}>Switch Theme</Button>
    </React.Fragment>
  );
};

export default HomePage;
