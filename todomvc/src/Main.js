import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from './TodoProvider';

export default function Main() {
  const { todos } = useContext(TodoContext);
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              item={todo}
            ></TodoItem>
          ))
        }
      </ul>
    </section>
  );
}
