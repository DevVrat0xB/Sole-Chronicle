import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  cardHeight: {
    minHeight: "10vh",
  },
  centered: {
    textAlign: "center",
  },
  outlineOnHover: {
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
}));

const Option = (props) => {
  const style = useStyles();
  const { name, icon, subOptions } = props.details;

  function showAllSubOptions(optionsList) {
    if (optionsList && optionsList.length > 0) return optionsList.join(", ");
  }

  return (
    <Grid
      container
      alignItems="center"
      spacing={2}
      className={clsx(style.cardHeight, style.outlineOnHover)}
      onClick={() => {
        console.debug("Option selected: " + name);
      }}
    >
      <Grid item xs={4} className={style.centered}>
        <SvgIcon fontSize="large">{icon}</SvgIcon>
      </Grid>
      <Grid container item xs={8}>
        <Grid item xs={12}>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{showAllSubOptions(subOptions)}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

Option.propTypes = {
  details: {
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    subOptions: PropTypes.arrayOf(PropTypes.string),
  },
};
export default Option;
