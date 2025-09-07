import { blue, green, purple } from "@mui/material/colors";

const { createTheme, responsiveFontSizes } = require("@mui/material");

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: purple[500],
      dark: purple[800],
    },
    success: {
      main: green[300],
      dark: green[100],
      light: green[500],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === "large" && {
            height: 20,
            width: 35,
          }),
        }),
      },
    },
  },
});

export default responsiveFontSizes(theme);
