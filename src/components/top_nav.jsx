import React, { useContext } from "react";
import { menuController } from "../app.jsx";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Apps";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  transparent: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

const TopNavigation = () => {
  const style = useStyles();
  const fadeInMenu = useContext(menuController);

  function toggleMenu() {
    fadeInMenu((wasFaded) => !wasFaded);
  }

  return (
    <React.Fragment>
      <AppBar position="fixed" className={style.transparent}>
        <Toolbar variant="dense">
          <IconButton aria-label="Menu" onClick={toggleMenu}>
            <MenuIcon color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* for avoiding other elements being placed behind the navigation. */}
      {/* <Toolbar variant="dense" /> */}
    </React.Fragment>
  );
};

export default TopNavigation;
