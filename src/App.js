import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Home from './views/Home'
import Header from "./Components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home/>
    </ThemeProvider>
  );
}

export default App;
