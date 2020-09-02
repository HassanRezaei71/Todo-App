import React from 'react'

export default function TodoCard({todo}) {
    return (
        <React.Fragment>
          <h2>{todo.title}</h2>
          <p>{todo.text}</p>
          <ul>
            {todo.subTask.map((sub) => (
              <li>{sub.status ? <del>{sub.text}</del> : sub.text}</li>
            ))}
          </ul>
        </React.Fragment>
    )
}
