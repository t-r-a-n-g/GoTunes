import { createTheme } from "@material-ui/styles";
import "@fontsource/khula";
import "@fontsource/montserrat";
import "@fontsource/give-you-glory";

const themeGlobal = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

/* const theme = createTheme({
  palette: {
    primary: {
      main: "#EE4540",
      contrastText: "#fff"
    },
    secondary: {
      main: "#C72C41",
    },
    background: {
      default: "#510A32"
    },
    text: {
      primary: "#fff",
      secondary: "#fff"
    },
    typography: {
      fontFamily: "khula",
    },
    
  },
}); */

export default themeGlobal;
