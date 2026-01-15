import React, { use } from 'react'
import ToDoHeader from '../ToDoHeader/toDoHeader.jsx';
import ToDoList from '../ToDoList/ToDoList.jsx';
import { useState } from 'react';

function ToDoApp() {
  const [toDos, setToDos] = useState([
    "OOOYAA",
    "TETE",
    "AWWOOGGA",
    "*shits pants*"
  ]);

  const [newToDo, setNewToDo] = useState("");

  function handleClick(){
    setToDos([...toDos, newToDo]);
    setNewToDo("");
  } 

  return (
    <>
        <ToDoHeader />

        <input 
          value= {newToDo}
          onChange = {(e) => setNewToDo(e.target.value)}
          placeholder = "New To-Do..."
        />

        <button onClick={handleClick}>Add To-Do</button>

        <ToDoList toDosArray = {toDos}/>
    </>
  );
}

export default ToDoApp;