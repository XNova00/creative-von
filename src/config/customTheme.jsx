import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#F9F4EF",
    },
  },
  typography: {
    h1: {
      fontFamily: "Quattrocento, sans-serif",
      fontSize: "64px",
      fontStyle: "normal",
      fontWeight: 500,
      color: "#020826",
      "@media (max-width:600px)": {
        fontSize: "48px",
      },
    },
    h2: {
      fontFamily: "Quattrocento, sans-serif",
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: 400,
      color: "#020826",
      "@media (max-width:600px)": {
        fontSize: "40px",
      },
    },
    h3: {
      fontFamily: "Quattrocento, sans-serif",
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 500,
      color: "#020826",
      "@media (max-width:600px)": {
        fontSize: "32px",
      },
    },
    h4: {
      fontFamily: "Quattrocento, sans-serif",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 500,
      color: "#020826",
      "@media (max-width:600px)": {
        fontSize: "24px",
      },
    },

    body1: {
      fontFamily: "Quattrocento, sans-serif",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 400,
      color: "#716040",
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },
    body2: {
      fontFamily: "Quattrocento, sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      color: "#716040",
    },

    body3: {
      fontFamily: "Quattrocento, sans-serif",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      color: "#716040",
    },

    myCustomButton: {
      fontFamily: "Quattrocento, sans-serif",
      fontSize: "15px",
      fontStyle: "normal",
      fontWeight: 700,
      color: "#F6EFEF",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiPaper-elevation1": {},
          "&.MuiPaper-elevation2": {},
          "&.MuiPaper-elevation3": {},
          "&.MuiPaper-elevation4": {
            boxShadow: "none",
            padding: "24px 0",
            backgroundColor: "transparent",
          },
          "&.MuiPaper-elevation5": {},
        },
      },
    },
  },
});