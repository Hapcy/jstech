import React, { useState } from 'react';

import '../node_modules/todomvc-common/base.css';
import '../node_modules/todomvc-app-css/index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
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

  return (
    <section className="todoapp">
      <Header
        submitTodo={todo => addNewTodo(todo)}
      ></Header>
      <Main
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      ></Main>
      <Footer></Footer>
    </section>
  );
}

export default App;
