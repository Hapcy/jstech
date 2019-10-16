import React from 'react';
import TodoItem from './TodoItem';

export default function Main({ todos, toggleTodo, deleteTodo }) {
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
              toggle={() => toggleTodo(todo.id)}
              deleteItem={() => deleteTodo(todo.id)}
            ></TodoItem>
          ))
        }
      </ul>
    </section>
  );
}
