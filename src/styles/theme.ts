import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Hat",
    h2: {
      fontWeight: 800,
      color: "#EEDDCB",
    },
    h3: {
      fontWeight: 800,
      color: "#EEDDCB",
    },
    h5: {
      fontWeight: 700,
      color: "#EEDDCB",
    },
    h4: {
      fontWeight: 700,
      color: "#EEDDCB",
    },
    body1: { fontWeight: 700, color: "#EEDDCB" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 760,
      md: 1300,
      lg: 1536,
      xl: 1918,
    },
  },
});
