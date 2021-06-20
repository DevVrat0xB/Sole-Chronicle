import React, { useState } from "react";
import PropTypes from "prop-types";
import MenuOptions from "./menu_options.js";
import Option from "./option.jsx";

// Material core components.
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// icons and styles.
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  fullHeightWidth: {
    display: "block",
    position: "fixed",
    top: "0",
    left: "0",
    height: "100vh",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
  marginedContainer: {
    marginTop: "8vh",
    marginBottom: "2vh",
    marginLeft: "3%",
    marginRight: "3%",
    height: "90vh",
    width: "94%",
  },
  somePadding: {
    padding: "2%",
    height: "auto",
  },
}));

const Menu = (props) => {
  const style = useStyles();
  const options = MenuOptions;

  return (
    <Fade in={props.fadeIn} timeout={{ enter: 500, exit: 500 }}>
      <Box variant="div" className={style.fullHeightWidth}>
        <Grid
          container
          alignItems="center"
          alignContent="flex-start"
          spacing={5}
          className={style.marginedContainer}
        >
          <Grid item xs={12}>
            <Typography variant="h2">{"Menu"}</Typography>
          </Grid>
          {options.map((optionDetails) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={optionDetails.name}
              className={style.somePadding}
            >
              <Option details={optionDetails} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>
  );
};

Menu.propTypes = {
  fadeIn: PropTypes.bool.isRequired,
  options: {
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    subOptions: PropTypes.arrayOf(PropTypes.string),
  },
};

export default Menu;
