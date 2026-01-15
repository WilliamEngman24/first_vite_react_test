import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'

function ToDoList({toDosArray}) {


  return (
    <ul>
      {toDosArray.map((toDo, index) =>{
        return <ToDoItem key={index} text={toDo} />
      })}
    </ul>
  )
}

export default ToDoList

