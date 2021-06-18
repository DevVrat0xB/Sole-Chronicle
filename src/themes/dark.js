import COLORS from "./colors";
import Typography from "./typography";

const Dark = {
  palette: {
    type: "dark",
    primary: {
      main: COLORS.forestGreen,
    },
    secondary: {
      main: COLORS.pineGreen,
    },
    text: {
      primary: COLORS.white,
      secodary: COLORS.limeGreen,
    },
    background: {
      default: COLORS.diesel,
      paper: COLORS.diesel,
    },
  },
  typography: Typography,
};

export default Dark;
