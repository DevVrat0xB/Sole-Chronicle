import React from "react";
import Footer from "../components/footer.jsx";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
    alignItems: "center",
  },
  centered: {
    width: "100%",
    textAlign: "center",
  },
  horizontallyPadded: {
    padding: "2% 30%",
  },
  atBottom: {
    position: "fixed",
    bottom: "0px",
  },
}));

const HomePage = () => {
  const style = useStyles();
  const brandName = "BuJo";
  const summary = `
    Create a beautiful and fully functional journal all by yourself
    without having any out-of-the-box "creative" skills.
    We happily welcome you all to this world of digital journals.
  `;

  return (
    <React.Fragment>
      <Grid container className={style.gradientBackground}>
        <Grid item xs={12} className={style.centered}>
          <Typography variant="h1">{brandName}</Typography>
          <Typography variant="subtitle1" className={style.horizontallyPadded}>
            {summary}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={style.atBottom}>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HomePage;
