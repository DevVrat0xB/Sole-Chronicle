import React from "react";

import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  fullHeightWidth: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100vh",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Menu = (props) => {
  const style = useStyles();

  return (
    <Fade in={props.fadeIn} timeout={{ enter: 500, exit: 500 }}>
      <div className={style.fullHeightWidth}></div>
    </Fade>
  );
};

export default Menu;
