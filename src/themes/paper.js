import COLORS from "./colors";
import Typography from "./typography";

const Paper = {
  palette: {
    type: "light",
    primary: {
      main: COLORS.jadeGreen,
    },
    secondary: {
      main: COLORS.pineGreen,
    },
    text: {
      primary: COLORS.diesel,
      secodary: COLORS.mediumVioletred,
    },
    background: {
      default: COLORS.white,
      paper: COLORS.white,
    },
  },
  typography: Typography,
};

export default Paper;
