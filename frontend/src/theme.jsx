import { createTheme } from "@mui/material/styles";
import "@fontsource/khula";
import "@fontsource/montserrat";
import "@fontsource/give-you-glory";

const themeGlobal = createTheme({
  palette: {
    primary: {
      main: "#801336",
      contrastText: "#fff",
    },
    secondary: {
      main: "#C72C41",
    },
    error: {
      main: "#C72C41",
    },
    background: {
      default: "#121212",
    },
    text: {
      primary: "#f2f2f2",
      secondary: "#949494",
      third: "#0000",
    },
    button: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: ["Khula"].join(","),
  },
});

export default themeGlobal;
