import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
  },
  centered: {
    width: "100%",
    textAlign: "center",
  },
  horizontallyPadded: {
    padding: "2% 30%",
  },
});

const NoSuchPage = () => {
  const style = useStyles();
  const message = "You creativity has no limits, unfortunately we have";
  const description = `
    The page you were looking for doesn't exists. Maybe you mistyped something or
    maybe it's temporarily not available. Please contact us if you're sure that
    there must be something here.
  `;

  return (
    <Grid container className={style.container}>
      <Grid item xs={12} className={style.centered}>
        <Typography variant="h1">{message}</Typography>
        <Typography variant="subtitle1" className={style.horizontallyPadded}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NoSuchPage;
