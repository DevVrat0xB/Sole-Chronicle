import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  footerHeight: {
    display: "block",
    padding: "0",
    margin: "0",
    height: "3vh",
    width: "100%",
    textAlign: "center",
    backgroundColor: "transparent",
  },
}));

const Footer = () => {
  const style = useStyles();

  return (
    <footer className={style.footerHeight}>
      copyright&#9400;2021. All rights are reserved.
    </footer>
  );
};

export default Footer;
