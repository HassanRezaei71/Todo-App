import React from "react";
import { Container, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0",
    background: "#031a4e",
    color: "#ffffff",
  },
  headTitle: {
    fontSize: "1.5rem",
  },
  btnContainer: {
    width: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btn:{
    color:'#ffff'
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <header>
      <Container maxWidth={"xl"} className={classes.root}>
        <Container maxWidth={"lg"}>
          <Grid container justify="space-between">
            <h1 className={classes.headTitle}>Todo List</h1>
            <div className={classes.btnContainer}>
              <Button className={classes.btn} component={Link} to={'/add'}>Add</Button>
              <Button className={classes.btn} component={Link} to={'/'}>Home</Button>
            </div>
          </Grid>
        </Container>
      </Container>
    </header>
  );
}
