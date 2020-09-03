import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Edit, Delete } from "@material-ui/icons";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import "./TodoTable.css";
import { deleteTodo } from "../Redux/todo/todoAction";
import { connect } from "react-redux";
import { toggleDoneTodo } from "../Redux/todo/todoAction";
import { Link } from "react-router-dom";

const styles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row(props) {
  const { row, deleteTodo, toggleDoneTodo, itemId } = props;
  const [open, setOpen] = React.useState(false);
  const classes = styles();
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell style={{ width: "20px" }}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="center">{row.text}</TableCell>
        <TableCell align="center">
          <IconButton component={Link} to={`/update/${itemId}`}>
            <Edit />
          </IconButton>
          <IconButton>
            <Delete onClick={() => deleteTodo(itemId)} />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={0}>
              <ul>
                {row.subTask.map((item) => (
                  <li className="c-subtask-item" key={item.id}>
                    <FormControlLabel
                      classes={{ root: item.status ? "c-disable" : "" }}
                      control={
                        <Checkbox
                          onChange={() => toggleDoneTodo(row.id, item.id)}
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label={item.text}
                    />
                  </li>
                ))}
              </ul>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function TodoTable({ todos, deleteTodo, toggleDoneTodo }) {
  return (
    <TableContainer classes={{ root: "mytable" }} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Task</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((row) => (
            <Row
              key={row.id}
              row={row}
              deleteTodo={deleteTodo}
              toggleDoneTodo={toggleDoneTodo}
              itemId={row.id}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default connect(null, { deleteTodo, toggleDoneTodo })(TodoTable);
