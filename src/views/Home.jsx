import React from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import TodoCard from "../Components/TodoCard";

function Home({ todos }) {
  return (
    <Container>
      {todos.map((item) => (
        <TodoCard todo={item} key={item.id} />
      ))}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return { todos: state.todo.todoList };
};

export default connect(mapStateToProps, {})(Home);
