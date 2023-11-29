import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#020826",
    },
    background: {
      default: "#F9F4EF",
    }
  },
  typography: {
    h1: {
      fontFamily: "Quattrocento, sans-serif",
      fontSize: "64px",
      fontStyle: "normal",
      fontWeight: 700,
      color: "#020826",
      "@media (max-width:899px)": {
        fontSize: "40px",
      },
      "@media (max-width:360px)": {
        fontSize: "32px",
      },
    },
    h2: {
      fontFamily: "Quattrocento, sans-serif",
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: 700,
      color: "#020826",
      "@media (max-width:600px)": {
        fontSize: "40px",
      },
    },
    h3: {
      fontFamily: "Quattrocento, sans-serif",
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 700,
      color: "#020826",
      "@media (max-width:600px)": {
        fontSize: "32px",
      },
    },
    h4: {
      fontFamily: "Quattrocento, sans-serif",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 700,
      color: "#020826",
      "@media (max-width:600px)": {
        fontSize: "24px",
      },
    },

    body1: {
      fontFamily: "Quattrocento Sans, sans-serif",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 400,
      color: "#716040",
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },
    body2: {
      fontFamily: "Quattrocento Sans, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      color: "#716040",
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },

    body3: {
      fontFamily: "Quattrocento Sans, sans-serif",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      color: "#716040",
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
            padding: "24px 100px",
            backgroundColor: "transparent",
            "@media only screen and (max-width: 1200px)": {
              padding: "48px",
            },
            "@media only screen and (max-width: 599px)": {
              padding: "16px",
            },
          },
          "&.MuiPaper-elevation5": {},
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          "&.MuiToolbar-root": {
            padding: "0",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-containedSizeLarge": {
            fontFamily: "Quattrocento Sans, sans-serif",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: 700,
            backgroundColor: "#8C7851",
            color: "#FFFFFE",
          },
        },
      },
    },
  },
});
