import React from 'react';

const ENTER_KEY = 'Enter';

export default function Header({ submitTodo }) {

  function handleKeyPress(e) {
    if (e.key === ENTER_KEY) {
      submitTodo(e.target.value);
      e.target.value = '';
    } 
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyPress={e => handleKeyPress(e)}
      />
    </header>
  )
}
