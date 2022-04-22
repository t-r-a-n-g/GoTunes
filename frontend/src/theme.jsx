import { createTheme } from "@mui/material/styles";
import "@fontsource/khula";
import "@fontsource/montserrat";
import "@fontsource/give-you-glory";

/* const themeGlobal = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
}); */

const themeGlobal = createTheme({
  palette: {
    primary: {
      main: "#EE4540",
      contrastText: "#fff",
    },
    secondary: {
      main: "#C72C41",
    },
    background: {
      default: "#510A32",
      button: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "#000",
    },
  },
  typography: {
    fontFamily: ["Khula"].join(","),
  },
});

export default themeGlobal;
