import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      active: string;
      hover: string;
      border: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      active?: string;
      hover?: string;
      border?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#757ce8",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },

    custom: {
      active: "#1976d2", // Active background color
      hover: "#1976d2", // Hover background color
      border: "#1976d2", // Border color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
