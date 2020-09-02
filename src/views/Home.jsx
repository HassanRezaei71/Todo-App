import React, { useState } from "react";
import Header from "../Components/Header";
import { v4 as uId } from "uuid";
import { Container } from "@material-ui/core";
import TodoCard from "../Components/TodoCard";

export default function Home() {
  const [todos, SetTodos] = useState([
    { id: uId, title: "Task1", subTask: [{ id: uId(), text: "text1", status: false }] },
    { id: uId, title: "Task1", subTask: [{ id: uId(), text: "text1", status: true }] },
  ]);

  return (
    <Container>
      {todos.map((item) => (
        <TodoCard todo={item} />
      ))}
    </Container>
  );
}
