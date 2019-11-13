import React, { useContext } from 'react';
import { TodoContext } from './TodoProvider';

export default function TodoItem({
  item: {
    completed,
    label,
    editing,
    id,
  },
}) {
  const { deleteTodo, toggleTodo } = useContext(TodoContext);

  return (
    <li className={ completed ? 'completed' : ''}>
      { !editing
        ? (<div className="view">
          <input className="toggle" type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
          <label>{ label }</label>
          <button className="destroy" onClick={() => deleteTodo(id)}></button>
        </div>)
        : (
          <input className="edit" value={label} />
        )
      }
    </li>
  );
}