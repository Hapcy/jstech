import React from 'react';

export default function TodoItem({
  item: {
    completed,
    label,
    editing,
  },
  toggle,
  deleteItem
}) {
  return (
    <li className={ completed ? 'completed' : ''}>
      { !editing
        ? (<div className="view">
          <input className="toggle" type="checkbox" checked={completed} onChange={toggle}/>
          <label>{ label }</label>
          <button className="destroy" onClick={deleteItem}></button>
        </div>)
        : (
          <input className="edit" value={label} />
        )
      }
    </li>
  );
}