import React, { useState } from 'react';

export const TodoContext = React.createContext(null);

export default function TodoProvider({ children }) {
  const [maxTodoId, setMaxTodoId] = useState(0);
  const [todos, setTodos] = useState([]);

  function addNewTodo(todo) {
    setTodos([
      ...todos,
      {
        id: maxTodoId,
        completed: false,
        editing: false,
        label: todo,
      },
    ]);
    setMaxTodoId(maxTodoId + 1);
  }

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    }));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const context = {
    addNewTodo,
    deleteTodo,
    toggleTodo,
    todos,
  };

  return (
    <TodoContext.Provider value={context}>
      { children }
    </TodoContext.Provider>
  )
}
