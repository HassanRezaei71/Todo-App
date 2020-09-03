import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { FormGroup, Container, Button } from "@material-ui/core";
import { v4 as uId } from "uuid";
import { connect, useSelector } from "react-redux";
import { addTodo, editTodo } from "../Redux/todo/todoAction";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2rem",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "2rem",
  },
  root: {
    "& .MuiTextField-root": {
      margin: "1rem auto",
      minWidth: "60%",
    },
  },
}));

function AddTodo({ addTodo, editTodo }) {
  const history = useHistory();
  const { id } = useParams();
  const todoItem = useSelector((state) =>
    state.todo.todoList.find((item) => item.id === id)
  );
  const [todo, setTodo] = useState(
    todoItem
      ? { title: todoItem.title, text: todoItem.text }
      : {
          title: "",
          text: "",
        }
  );

  const [subTask, setSubTask] = useState(
    todoItem ? todoItem.subTask : [{ id: uId(), text: "", status: false }]
  );

  const addSubTask = () => {
    setSubTask([...subTask, { id: uId(), text: "", status: false }]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleChangeSub = (subid, e) => {
    const { value } = e.target;
    setSubTask(
      subTask.map((item) => (item.id === subid ? { ...item, text: value } : item))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    todoItem && editTodo({ id: todoItem.id, ...todo, subTask: subTask });
    !todoItem && addTodo({ id: uId(), ...todo, subTask: subTask });
    history.push("/");
  };

  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <FormGroup>
          <TextField
            value={todo.title}
            onChange={handleChange}
            id="title"
            name="title"
            label="Task"
            type="text"
            required
          />
        </FormGroup>
        <FormGroup>
          <TextField
            value={todo.text}
            onChange={handleChange}
            id="text"
            name="text"
            label="Description"
            type="text"
            required
          />
        </FormGroup>
        {subTask.map((sub) => (
          <FormGroup key={sub.id}>
            <TextField
              label="SubTask"
              name="subtask"
              value={sub.text}
              type="text"
              onChange={(e) => handleChangeSub(sub.id, e)}
            />
          </FormGroup>
        ))}
        <div className={classes.btnContainer}>
          <Button onClick={addSubTask} variant="contained" color="primary" type="button">
            Add SubTask
          </Button>
          <Button variant="contained" color="secondary" type="submit">
            {todoItem ? "Edit" : "Submit"}
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default connect(null, { addTodo, editTodo })(AddTodo);
