import React from "react";
import { ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import AppRouter from "./routes/AppRouter";
import "./styles/global.css";
import theme from "./styles/theme";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </Provider>,
);
