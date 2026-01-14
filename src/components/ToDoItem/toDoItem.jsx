import React from 'react'

function ToDoItem({text, priority}) {
  return (
    <li>{text} | Prio: {priority} </li>
  )
}

export default ToDoItem
