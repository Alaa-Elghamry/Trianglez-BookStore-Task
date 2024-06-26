import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
  },

  palette: {
    secondary: {
      main: "#F2994A",
    },
  },
  theme_palette: {
    primaryColor: "#2F80ED",
    secondryColor: "#F2994A",
    redColor: "#EB001B",
    bgColor: "#F1F4F6",
    inputBg: "rgba(239, 241, 249, 0.6)",
    fontColor: "#4F4F4F",
    activeLinkColor: "#2F80ED",
    errorColor: "#EB5757",
    hard: "#EB5757",
    medium: "#F2994A",
    orangeBtn: "#F79E1B",
    easy: "#27AE60",
    lightBlack: "#333333",
    labelColor: "#5E6366",
  },
  overrides: {
    MuiPaper: {
      root: {
        background: "white",
        borderRadius: "12px",
        padding: "30px 20px",
      },
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

export default theme;
