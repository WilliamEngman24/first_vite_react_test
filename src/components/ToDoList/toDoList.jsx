import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'

function ToDoList() {
  return (

    <ul>
      <ToDoItem text="OOOYAA" priority={1}/>
      <ToDoItem text={24} priority={2}/>
      <ToDoItem text="AWWOOGGA" priority={3}/>
    </ul>
  )
}

export default ToDoList

