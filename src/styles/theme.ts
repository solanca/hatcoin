import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h3: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 700,
      color: "azure",
    },
    h4: {
      fontWeight: 700,
      color: "azure",
    },
    body1: { fontWeight: 700, color: "azure" },
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
