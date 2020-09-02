import React from "react";
import { v4 as uid } from 'uuid';

export default function TodoCard({ todo }) {
  return (
    <React.Fragment key={uid()}>
      <h2>{todo.title}</h2>
      <p>{todo.text}</p>
      <ul>
        {todo.subTask.map((sub) => (
          <li key={sub.id}>{sub.status ? <del>{sub.text}</del> : sub.text}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}
