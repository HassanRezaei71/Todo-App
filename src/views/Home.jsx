import React from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import TodoTable from "../Components/TodoTable";

function Home({ todos }) {
  return (
    <Container>
      <TodoTable todos={todos}/>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return { todos: state.todo.todoList };
};

export default connect(mapStateToProps, { })(Home);
