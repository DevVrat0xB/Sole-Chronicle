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

const HomePage = () => {
  const style = useStyles();
  const brandName = "BuJo";
  const summary = `
    Create a beautiful and fully functional journal all by yourself
    without having any out-of-the-box "creative" skills.
    We happily welcome you all to this world of digital journals.
  `;

  return (
    <Grid container className={style.container}>
      <Grid item xs={12} className={style.centered}>
        <Typography variant="h1">{brandName}</Typography>
        <Typography variant="subtitle1" className={style.horizontallyPadded}>
          {summary}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomePage;
