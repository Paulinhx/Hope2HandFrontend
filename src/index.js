import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(234,212,156,1)",
      light: "rgba(234,212,156,1)",
      dark: "rgba(234,212,156,1)",
    },
    info: {
      main: "rgba(162,165,166,1)",
      light: "rgba(184,185,185,1)",
      dark: "rgba(161,161,161,1)",
    },
    secondary: { main: "rgba(144,141,185,1)" },
  },
  typography: { fontFamily: "Roboto" },
  shape: { borderRadius: 12 },
});

ReactDOM.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
