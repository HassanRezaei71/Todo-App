import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Home from "./views/Home";
import Header from "./Components/Header";
import AddTodo from "./views/AddTodo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/add">
            <AddTodo />
          </Route>
          <Route path="/update/:id"></Route>
          <Route path="/todo/:id"></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
