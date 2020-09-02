import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./Components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <h1>Test</h1>
    </ThemeProvider>
  );
}

export default App;
