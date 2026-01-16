import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'

function ToDoList({toDosArray, onRemove}) {

  return (
    <ul>
      {toDosArray.map((toDo, index) =>{
        return (
          <ToDoItem 
            key={index}
            text={toDo.text} 
            done={toDo.done}
            onRemove={()=> onRemove(index)}
          />
        );
      })}
    </ul>
  )
}

export default ToDoList

