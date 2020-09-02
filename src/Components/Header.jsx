import React from "react";
import { Container, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0",
    background: "#031a4e",
    color: "#ffffff",
  },
  headTitle: {
    fontSize: "1.5rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <header>
      <Container maxWidth={"xl"} className={classes.root}>
        <Container maxWidth={"lg"}>
          <Grid container>
            <h1 className={classes.headTitle}>Todo List</h1>
          </Grid>
        </Container>
      </Container>
    </header>
  );
}
