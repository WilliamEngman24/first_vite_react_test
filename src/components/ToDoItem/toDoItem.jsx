import React from 'react'
import "./toDoItem.css";

function ToDoItem({text, done, onRemove}) {
  return (
    <li>
      <label classname = "checkbox" checked={done}>
        <input type="checkbox"/>
        <span className= "mark"></span>
      </label>
      {text}
      <button onClick={onRemove}>X</button>
    </li>
  )
}

export default ToDoItem
