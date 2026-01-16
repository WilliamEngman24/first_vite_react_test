import React, { use } from 'react'
import ToDoHeader from '../ToDoHeader/toDoHeader.jsx';
import ToDoList from '../ToDoList/ToDoList.jsx';
import { useState } from 'react';

function ToDoApp() {
  const [toDos, setToDos] = useState([
    {text:"OOOYAA", done:false},
    {text:"TETE", done:false},
    {text:"AWWOOGGA", done:false},
    {text:"*shits pants*", done:false},
  ]);

  const [newToDo, setNewToDo] = useState("");

  function handleClick(){
    setToDos([...toDos, newToDo]);
    setNewToDo("");
  } 

  function handleRemoveToDo(indexToRemove) {
    setToDos(toDos.filter((_, index) => index !== indexToRemove));
  }

  function handelRemoveAll() {
    setToDos([]);
  }


  return (
    <>
        <ToDoHeader />

        <input 
          value= {newToDo}
          onChange = {(e) => setNewToDo(e.target.value)}
          placeholder = "New To-Do..."
        />

        <p> Amount of To-Dos: {toDos.length} </p>

        <button onClick={handleClick}>Add To-Do</button>

        <ToDoList toDosArray = {toDos} onRemove={handleRemoveToDo}/>

        <button onClick={handelRemoveAll}>Remove All</button>
    </>
  );
}

export default ToDoApp;